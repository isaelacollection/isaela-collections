const TablaProductosPantalones = ({ productos, onDetalles, onEditar, onEliminar }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Categoria</th>
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Precio</th>
            <th className="py-2 px-4 text-left">Stock</th>
            <th className="py-2 px-4 text-left">Detalle</th>
            <th className="py-2 px-4 text-left">Imagen</th>
            <th className="py-2 px-4 text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((p) => (
            <tr key={p._id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{p.categoriaPantalon}</td>
              <td className="py-2 px-4">{p.nombrePantalon}</td>
              <td className="py-2 px-4">${p.precioPantalon}</td>
              <td className="py-2 px-4">{p.stockPantalon}</td>
              <td className="py-2 px-4">{p.detallePantalon}</td>


              <td className="py-2 px-4">
                <img
                  src={p.imagenUrl || p.imagePantalon || p.imagePantalon}
                  alt={p.nombrePantalon}
                  className="w-10 h-10 object-contain"
                />
              </td>

              <td className="py-2 px-4">
                <div className="flex justify-center items-center gap-2">

                  <button
                    onClick={() => onDetalles(p)}
                    className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                  >
                    Detalles
                  </button>

                  <button
                    onClick={() => onEditar(p)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => onEliminar(p._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductosPantalones;
