import { useState, useEffect } from "react";
import SubirProductoFaldas from "../pages/subirProductoFaldas";
import TablaProductosFaldas from "../components/ProductsTableFaldas";
//este es una funcion
const ProductManagerFaldas = () => {
  const [productos, setProductos] = useState([]);

  // 🔹 Cargar productos al iniciar
  useEffect(() => {
    const fetchProductos = async () => {
      // const res = await fetch("http://localhost:5000/api/products");
      const res = await fetch("https://server-backend-vf5p.onrender.com/api/productFaldas");

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
    alert(`Detalles del producto:\n\nCategoria: ${p.categoriaFalda}\nNombre: ${p.nombreFalda}\nPrecio: ${p.precioFalda}\nStock: ${p.stockFalda}\nDetalle: ${p.detalleFalda}`);
  };

  // 🔹 Editar producto
  const handleEditar = async (p) => {
    const nuevoPrecio = prompt(`Nuevo precio para ${p.nombreFalda}:`, p.precioFalda);
    if (nuevoPrecio === null) return;
//https://server-backend-vf5p.onrender.com
    //const res = await fetch(`http://localhost:5000/api/products/${p._id}`, {
    const res = await fetch(`https://server-backend-vf5p.onrender.com/api/productFaldas/${p._id}`, {

      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...p, precioFalda: nuevoPrecio }),
    });

    if (res.ok) {
      const actualizado = await res.json();
      setProductos((prev) =>
        prev.map((prod) => (prod._id === actualizado._id ? actualizado : prod))
      );
    }
  };

  // 🔹 Eliminar producto
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;
//https://server-backend-vf5p.onrender.com
    //const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    const res = await fetch(`https://server-backend-vf5p.onrender.com/api/productFaldas/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProductos((prev) => prev.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Gestión de Productos</h1>

      <SubirProductoFaldas onProductoAgregado={handleProductoAgregado} />

      <TablaProductosFaldas
        productos={productos}
        onDetalles={handleDetalles}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
      />
    </div>
  );
};

export default ProductManagerFaldas;
