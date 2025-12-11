import { useState } from "react";

const subirProductoPantalones = ({ onProductoAgregado }) => {
  const [nombrePantalon, setnombrePantalon] = useState("");
  const [precioPantalon, setprecioPantalon] = useState("");
  const [stockPantalon, setstockPantalon] = useState("");
  const [imagenPantalon, setimagenPantalon] = useState(null);
  const [mensaje, setMensaje] = useState(""); // 👈 nuevo estado para el mensaje

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombrePantalon", nombrePantalon);
    formData.append("precioPantalon", precioPantalon);
    formData.append("stockPantalon", stockPantalon);
    formData.append("imagenPantalon", imagenPantalon);

    try {
      //const res = await fetch("http://localhost:5000/api/products", {
      //https://server-backend-vf5p.onrender.com
      const res = await fetch("https://server-backend-vf5p.onrender.com/api/productPantalons", {
        method: "POST",
        body: formData,
      });


      if (!res.ok) throw new Error("Error al subir el producto");

      const data = await res.json();
      onProductoAgregado(data); // notificar al padre
      
      // limpiar formulario
      setnombrePantalon("");
      setprecioPantalon("");
      setstockPantalon("");
      setimagenPantalon(null);

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
        <label className="block text-gray-700 mb-1">nombrePantalon pantalon</label>
        <input
          type="text"
          value={nombrePantalon}
          onChange={(e) => setnombrePantalon(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">precioPantalon pantalon</label>
        <input
          type="number"
          value={precioPantalon}
          onChange={(e) => setprecioPantalon(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">stockPantalon pantalon</label>
        <input
          type="number"
          value={stockPantalon}
          onChange={(e) => setstockPantalon(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">imagenPantalon pantalon</label>
        <input
          type="file"
          onChange={(e) => setimagenPantalon(e.target.files[0])}
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

export default subirProductoPantalones;
