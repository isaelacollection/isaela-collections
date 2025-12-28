import { useState, useEffect } from "react";
import SubirProducto from "../pages/subirProducto";
import TablaProductos from "../components/ProductsTable";

const ProductManager = () => {
  const [productos, setProductos] = useState([]);

  // 🔹 Cargar productos al iniciar
  useEffect(() => {
    const fetchProductos = async () => {
      // const res = await fetch("http://localhost:5000/api/products");
      const res = await fetch("https://server-backend-vf5p.onrender.com/api/products");

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
    alert(`Detalles del producto:\n\nCategoria: ${p.categoria}\nNombre: ${p.nombre}\nPrecio: ${p.precio}\nStock: ${p.stock}\ndetalle: ${p.detalle}`);
  };

  // 🔹 Editar producto
  const handleEditar = async (p) => {
  const nuevoNombre = prompt("Nombre:", p.nombre);
  const nuevoPrecio = prompt("Precio:", p.precio);
  const nuevoStock = prompt("Stock:", p.stock);
  const nuevoDetalle = prompt("Detalle:", p.detalle);
 

  if (!nuevoNombre || !nuevoPrecio || !nuevoStock) return;

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
};


  // 🔹 Eliminar producto
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;
//https://server-backend-vf5p.onrender.com
    //const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    const res = await fetch(`https://server-backend-vf5p.onrender.com/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProductos((prev) => prev.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Gestión de Productos</h1>

      <SubirProducto onProductoAgregado={handleProductoAgregado} />

      <TablaProductos
        productos={productos}
        onDetalles={handleDetalles}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
      />
    </div>
  );
};

export default ProductManager;
