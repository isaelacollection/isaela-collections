import { useState } from "react";

const subirProductoFaldas = ({ onProductoAgregado }) => {
  const [nombreFalda, setnombreFalda] = useState("");
  const [precioFalda, setprecioFalda] = useState("");
  const [stockFalda, setstockFalda] = useState("");
  const [imagenFalda, setimagenFalda] = useState(null);
  const [mensaje, setMensaje] = useState(""); // 👈 nuevo estado para el mensaje

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombreFalda", nombreFalda);
    formData.append("precioFalda", precioFalda);
    formData.append("stockFalda", stockFalda);
    formData.append("imagen", imagenFalda);

    try {
      const res = await fetch("https://server-backend-vf5p.onrender.com/api/productFaldas", {
        method: "POST",
        body: formData,
      });


      if (!res.ok) throw new Error("Error al subir el producto");

      const data = await res.json();
      onProductoAgregado(data); // notificar al padre
      
      // limpiar formulario
      setnombreFalda("");
      setprecioFalda("");
      setstockFalda("");
      setimagenFalda(null);

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
      <h2 className="text-lg font-semibold text-gray-800">Agregar Producto Faldas</h2>

      <div>
        <label className="block text-gray-700 mb-1">Nombre Falda</label>
        <input
          type="text"
          value={nombreFalda}
          onChange={(e) => setnombreFalda(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Precio Falda</label>
        <input
          type="number"
          value={precioFalda}
          onChange={(e) => setprecioFalda(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Stock Falda</label>
        <input
          type="number"
          value={stockFalda}
          onChange={(e) => setstockFalda(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Imagen Falda</label>
        <input
          type="file"
          onChange={(e) => setimagenFalda(e.target.files[0])}
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

export default subirProductoFaldas;
