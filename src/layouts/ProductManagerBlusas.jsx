import { useState, useEffect } from "react";
import SubirProductoBlusas from "../pages/subirProductoBlusas";
import TablaProductosBlusas from "../components/ProductsTableBlusas";
//este es una funcion
const ProductManagerBlusas = () => {
  const [productos, setProductos] = useState([]);

  // 🔹 Cargar productos al iniciar
  useEffect(() => {
    const fetchProductos = async () => {
      // const res = await fetch("http://localhost:5000/api/products");
      const res = await fetch("https://server-backend-vf5p.onrender.com/api/productBlusas");

      const data = await res.json();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  // 🔹 Añadir producto nuevo sin recargar
  const handleProductoAgregado = (nuevo) => {
    setProductos((prev) => [...prev, nuevo]);
  };

  // 🔹 Ver detalles
  const handleDetalles = (p) => {
    alert(`Detalles del producto:\n\nCategoria: ${p.categoriaBlusa}\nNombre: ${p.nombreBlusa}\nPrecio: ${p.precioBlusa}\nStock: ${p.stockBlusa}\nDetalle: ${p.detalleBlusa}`);
  };

  // 🔹 Editar producto
  const handleEditar = async (p) => {
  const nuevoNombre = prompt("Nombre:", p.nombreBlusa);
  const nuevoPrecio = prompt("Precio:", p.precioBlusa);
  const nuevoStock = prompt("Stock:", p.stockBlusa);
  const nuevoDetalle = prompt("Detalle:", p.detalleBlusa);
 

  if (nuevoNombre == null || nuevoPrecio == null || nuevoStock == null || nuevoDetalle == null) return;

  const res = await fetch(`https://server-backend-vf5p.onrender.com/api/products/${p._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: nuevoNombre,
      precio: nuevoPrecio,
      stock: nuevoStock,
      detalle: nuevoDetalle,
      
    }),
  });

  if (res.ok) {
    const actualizado = await res.json();
    setProductos((prev) =>
      prev.map((prod) => (prod._id === actualizado._id ? actualizado : prod))
    );
  }
}

  // 🔹 Eliminar producto
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;
//https://server-backend-vf5p.onrender.com
    //const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    const res = await fetch(`https://server-backend-vf5p.onrender.com/api/productBlusas/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProductos((prev) => prev.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Gestión de Productos</h1>

      <SubirProductoBlusas onProductoAgregado={handleProductoAgregado} />

      <TablaProductosBlusas
        productos={productos}
        onDetalles={handleDetalles}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
      />
    </div>
  );
};

export default ProductManagerBlusas;
