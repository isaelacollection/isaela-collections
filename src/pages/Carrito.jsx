import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, quitarProducto, total } = useCarrito();

  if (carrito.length === 0) {
    return <p className="text-center mt-10">Carrito vacío 🛒</p>;
  }

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
            onClick={() => quitarProducto(p.id)}
            className="text-red-600"
          >
            ❌
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-xl">
        Total: ${total}
      </div>
    </div>
  );
};

export default Carrito;
