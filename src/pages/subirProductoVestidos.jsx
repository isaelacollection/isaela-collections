import { useState } from "react";

const subirProductoVestidos = ({ onProductoAgregado }) => {
  const [nombreVestido, setnombreVestido] = useState("");
  const [precioVestido, setprecioVestido] = useState("");
  const [stockVestido, setstockVestido] = useState("");
  const [imagenVestido, setimagenVestido] = useState(null);
  const [mensaje, setMensaje] = useState(""); // 👈 nuevo estado para el mensaje

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombreVestido", nombreVestido);
    formData.append("precioVestido", precioVestido);
    formData.append("stockVestido", stockVestido);
    formData.append("imagen", imagenVestido);

    try {
      const res = await fetch("https://server-backend-vf5p.onrender.com/api/productVestidos", {
        method: "POST",
        body: formData,
      });


      if (!res.ok) throw new Error("Error al subir el producto");

      const data = await res.json();
      onProductoAgregado(data); // notificar al padre
      
      // limpiar formulario
      setnombreVestido("");
      setprecioVestido("");
      setstockVestido("");
      setimagenVestido(null);

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
        <label className="block text-gray-700 mb-1">Nombre Vestido</label>
        <input
          type="text"
          value={nombreVestido}
          onChange={(e) => setnombreVestido(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Precio Vestido</label>
        <input
          type="number"
          value={precioVestido}
          onChange={(e) => setprecioVestido(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Stock Vestido</label>
        <input
          type="number"
          value={stockVestido}
          onChange={(e) => setstockVestido(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Imagen Vestido</label>
        <input
          type="file"
          onChange={(e) => setimagenVestido(e.target.files[0])}
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

export default subirProductoVestidos;
