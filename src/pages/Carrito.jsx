import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, quitarProducto, total } = useCarrito();

  if (carrito.length === 0) {
    return <p className="text-center mt-10">Carrito vacío 🛒</p>;
  }
  //funcion para realizar la venta por whatsapp
  const generarMensajeWhatsApp = (carrito, total) => {
    let mensaje = "Hola Isaela Collection 👗✨%0A";
    mensaje += "Quiero realizar este pedido:%0A%0A";

    carrito.forEach(p => {
      mensaje += `- ${p.nombre} (${p.cantidad} x $${p.precio})%0A`;
    });

    mensaje += `%0A💰 Total: $${total}`;

    return mensaje;
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
            className="text-red-600"
          >
            ❌
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-xl">
        Total: ${total}
      </div>

      <a
        href={`https://wa.me/593979906565?text=${generarMensajeWhatsApp(carrito, total)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-6 py-3 rounded text-lg"
      >
        🧾 Finalizar pedido por WhatsApp
      </a>




    </div>
  );
};

export default Carrito;
