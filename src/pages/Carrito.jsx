import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, quitarProducto, total, vaciarCarrito } = useCarrito();

  if (carrito.length === 0) {
    return <p className="text-center mt-10">Carrito vacío 🛒</p>;
  }

  // 📱 Mensaje WhatsApp
  const generarMensajeWhatsApp = (carrito, total) => {
    let mensaje = "Hola Isaela Collection 👗✨%0A";
    mensaje += "Quiero realizar este pedido:%0A%0A";

    carrito.forEach(p => {
      mensaje += `- ${p.nombre} (${p.cantidad} x $${p.precio})%0A`;
    });

    mensaje += `%0A💰 Total: $${total}`;

    return mensaje;
  };

  // 🧾 CHECKOUT COMPLETO
  const finalizarCompra = async () => {
    try {
      // 1️⃣ Crear venta
      const ventaRes = await fetch(
        "https://server-backend-vf5p.onrender.com/api/ventas",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clienteId: null, // cliente anónimo
            total,
            metodoPago: "WhatsApp",
            estado: "pendiente",
          }),
        }
      );

      const venta = await ventaRes.json();

      // 2️⃣ Crear detalle de venta
      for (const p of carrito) {
        await fetch(
          "https://server-backend-vf5p.onrender.com/api/detalleVentas",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ventaId: venta._id,
              productoId: p.id,
              nombre: p.nombre,
              precio: p.precio,
              cantidad: p.cantidad,
              subtotal: p.precio * p.cantidad,
            }),
          }
        );
      }

      // 3️⃣ Abrir WhatsApp
      window.open(
        `https://wa.me/593979906565?text=${generarMensajeWhatsApp(
          carrito,
          total
        )}`,
        "_blank"
      );

      // 4️⃣ Vaciar carrito
      vaciarCarrito();

    } catch (error) {
      console.error("Error en checkout:", error);
      alert("❌ Error al procesar la compra");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>

      {carrito.map(p => (
        <div
          key={p.id}
          className="flex justify-between items-center bg-white p-3 shadow rounded mb-2"
        >
          <div>
            <h3>{p.nombre}</h3>
            <p>{p.cantidad} x ${p.precio}</p>
          </div>

          <button
            onClick={() => quitarProducto(p.id)}
            className="text-red-600 text-xl"
          >
            ❌
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-xl mt-4">
        Total: ${total}
      </div>

      <button
        onClick={finalizarCompra}
        className="mt-4 bg-green-600 text-white px-6 py-3 rounded text-lg w-full"
      >
        🧾 Finalizar pedido por WhatsApp
      </button>
    </div>
  );
};

export default Carrito;
