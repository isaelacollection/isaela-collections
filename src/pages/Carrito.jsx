import { useCarrito } from "../context/CarritoContext";
import { generarFacturaPDF } from "../utils/generarFacturaPDF";

const Carrito = () => {
  const { carrito, quitarProducto, total, vaciarCarrito } = useCarrito();

  if (carrito.length === 0) {
    return <p className="text-center mt-10">Carrito vacío 🛒</p>;
  }

  // 📱 Mensaje WhatsApp
  const generarMensajeWhatsApp = () => {
    let mensaje = "Hola Isaela Collection 👗✨%0A";
    mensaje += "Quiero realizar este pedido:%0A%0A";

    carrito.forEach(p => {
      mensaje += `- ${p.nombre} (${p.cantidad} x $${p.precio})%0A`;
    });

    mensaje += `%0A💰 Total: $${total}`;
    return mensaje;
  };

  // 1️⃣ SOLO INICIAR PEDIDO (WHATSAPP)
  const iniciarPedidoWhatsApp = () => {
    const whatsappURL = `https://wa.me/593979906565?text=${generarMensajeWhatsApp()}`;
    window.open(whatsappURL, "_blank");
  };

  // 2️⃣ FINALIZAR PEDIDO + FACTURA PDF
  const finalizarPedidoConFactura = async () => {
    try {
      // Crear venta
      const ventaRes = await fetch(
        "https://server-backend-vf5p.onrender.com/api/ventas",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clienteId: null,
            total,
            metodoPago: "WhatsApp",
            estado: "pendiente",
          }),
        }
      );

      const venta = await ventaRes.json();

      // Crear detalle de venta
      for (const p of carrito) {
        await fetch(
          "https://server-backend-vf5p.onrender.com/api/detalleVentas",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ventaId: venta._id,
              productoId: p._id,
              nombreProducto: p.nombre,
              precioUnitario: p.precio,
              cantidad: p.cantidad,
              subtotal: p.precio * p.cantidad,
            }),
          }
        );
      }

      // Generar factura PDF
      generarFacturaPDF(venta, carrito);

      // Vaciar carrito
      vaciarCarrito();

      alert("✅ Pedido finalizado y factura generada");

    } catch (error) {
      console.error("Error al finalizar pedido:", error);
      alert("❌ Error al finalizar el pedido");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>

      {carrito.map(p => (
        <div
          key={p._id}
          className="flex justify-between items-center bg-white p-3 shadow rounded mb-2"
        >
          <div>
            <h3>{p.nombre}</h3>
            <p>{p.cantidad} x ${p.precio}</p>
          </div>

          <button
            onClick={() => quitarProducto(p._id)}
            className="text-red-600 text-xl"
          >
            ❌
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-xl mt-4">
        Total: ${total}
      </div>

      {/* 🔘 BOTONES */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={iniciarPedidoWhatsApp}
          className="bg-blue-600 text-white px-6 py-3 rounded text-lg w-full"
        >
          📱 Iniciar pedido
        </button>

        <button
          onClick={finalizarPedidoConFactura}
          className="bg-green-600 text-white px-6 py-3 rounded text-lg w-full"
        >
          🧾 Finalizar + Factura PDF
        </button>
      </div>
    </div>
  );
};

export default Carrito;
