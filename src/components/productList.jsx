import { useState, useEffect } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        // La URL de tu backend en Render.
        const res = await fetch(" https://server-backend-vf5p.onrender.com/api/products");
        
        // Manejo de errores de respuesta HTTP (404, 500, etc.)
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Error al cargar los productos: ${res.status}. Detalle: ${errorText.substring(0, 50)}...`);
        }

        const data = await res.json();
        setProductos(data);
        setLoading(false);
      } catch (err) {
        // Manejo de errores de red (ej. CORS, servidor no responde)
        console.error("Fetch Error:", err);
        setError("No se pudieron cargar los productos. Por favor, revisa la conexión del servidor.");
        setLoading(false);
      }
    };

    fetchProductos();
  }, []); // Se ejecuta solo al montar el componente

  // Muestra el estado de carga
  if (loading) {
    return (
      <section className="main-content">
        <h2 className="title">Cargando Productos...</h2>
        <p>Conectando con el servidor...</p>
      </section>
    );
  }

  // Muestra la lista de productos
  return (
    <section className="main-content">

      <h2 className="title">Productos Disponibles</h2>
      {/* Muestra el mensaje de error si existe */}
      {error && <p className="error-message">{error}</p>}
      
      <div className="products">

        {productos.map((p) => (
          // Usamos p._id o p.id como clave única (key)
          <div className="product-card" key={p._id || p.id} >
            
            {/* IMPLEMENTACIÓN CLAVE: El contenedor fijo de la imagen (para uniformidad) */}
            <div className="product-image-container">
              <img
                src={p.image}
                alt={p.nombre}
                className="product-image"
              />
            </div>

            <h3 className="product-name">{p.nombre}</h3>
            <p className="product-price">${p.precio}</p>
            {/* Muestra el stock si está disponible, o un espacio vacío si no lo está */}
            <p className="product-stock">{p.stock ? `Stock: ${p.stock}` : ''}</p> 
            
          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductList;