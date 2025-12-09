import { useState } from "react";

const SubirProducto = ({ onProductoAgregado }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState(""); // 👈 nuevo estado para el mensaje

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("precio", precio);
    formData.append("stock", stock);
    formData.append("imagen", imagen);

    try {
      const res = await fetch(" https://server-backend-vf5p.onrender.com/api/products", {
        method: "POST",
        body: formData,
      });


      if (!res.ok) throw new Error("Error al subir el producto");

      const data = await res.json();
      onProductoAgregado(data); // notificar al padre

      // limpiar formulario
      setNombre("");
      setPrecio("");
      setStock("");
      setImagen(null);

      // mostrar mensaje de éxito
      setMensaje("✅ Producto creado con éxito");
      // borrar mensaje después de 3 segundos
      setTimeout(() => setMensaje(""), 3000);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Agregar Producto</h2>

      <div>
        <label className="block text-gray-700 mb-1">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Imagen</label>
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
          className="w-full border rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Subir Producto
      </button>
    </form>
  );
};

export default SubirProducto;
