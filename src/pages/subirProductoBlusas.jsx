import { useState } from "react";

const subirProductoBlusas = ({ onProductoAgregado }) => {
  const [categoriaBlusa, setcategoriaBlusa] = useState("");
  const [nombreBlusa, setnombreBlusa] = useState("");
  const [precioBlusa, setprecioBlusa] = useState("");
  const [stockBlusa, setstockBlusa] = useState("");
  const [detalleBlusa, setdetalleBlusa] = useState("");
  const [imagenBlusa, setimagenBlusa] = useState(null);
  const [mensaje, setMensaje] = useState(""); // 👈 nuevo estado para el mensaje

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoriaBlusa", categoriaBlusa);
    formData.append("nombreBlusa", nombreBlusa);
    formData.append("precioBlusa", precioBlusa);
    formData.append("stockBlusa", stockBlusa);
    formData.append("categoriaBlusa", categoriaBlusa);
    formData.append("imagen", imagenBlusa);

    try {
      const res = await fetch("https://server-backend-vf5p.onrender.com/api/productBlusas", {
        method: "POST",
        body: formData,
      });


      if (!res.ok) throw new Error("Error al subir el producto");

      const data = await res.json();
      onProductoAgregado(data); // notificar al padre

      // limpiar formulario
      setcategoriaBlusa("");
      setnombreBlusa("");
      setprecioBlusa("");
      setstockBlusa("");
      setdetalleBlusa("");
      setimagenBlusa(null);

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
      <h2 className="text-lg font-semibold text-gray-800">Agregar Producto Blusa</h2>
      <div>
        <label className="block text-gray-700 mb-1">Categoria Blusa</label>
        <input
          type="text"
          value={categoriaBlusa}
          onChange={(e) => setcategoriaBlusa(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Nombre Blusa</label>
        <input
          type="text"
          value={nombreBlusa}
          onChange={(e) => setnombreBlusa(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Precio Blusa</label>
        <input
          type="number"
          value={precioBlusa}
          onChange={(e) => setprecioBlusa(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Stock Blusa</label>
        <input
          type="number"
          value={stockBlusa}
          onChange={(e) => setstockBlusa(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Detalle Blusa</label>
        <input
          type="text"
          value={detalleBlusa}
          onChange={(e) => setdetalleBlusa(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Imagen Blusa</label>
        <input
          type="file"
          onChange={(e) => setimagenBlusa(e.target.files[0])}
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

export default subirProductoBlusas;
