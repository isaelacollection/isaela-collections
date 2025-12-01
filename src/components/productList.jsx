import { useState, useEffect } from "react";
import "./productList.css";

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

      ´ <h2 className="title">Productos Disponibles</h2>
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
            {/** <p className="product-stock">{p.stock ? `Stock: ${p.stock}` : ''}</p>*/}
            <p className="product-stock">{ }</p>


            {/* 🚀 Nueva Sección: Botones de Acción */}
            {/* Contenedor de Acciones: AÑADE ESTAS CLASES */}
            <div className="product-actions flex justify-between items-center p-2 w-full">

              {/* Botón de WhatsApp: Clase ajustada a w-1/2 (50% de ancho) */}
              <a
                href={`https://wa.me/593998694414?text=Hola,%20me%20interesa%20el%20producto:%20${p.nombre}%20que%20vi%20en%20la%20tienda.`}
                target="_blank"
                rel="noopener noreferrer"
                className="
      flex items-center justify-center 
      bg-green-500 hover:bg-green-600 
      text-white 
      font-bold 
      py-2 px-4 
      rounded-lg 
      shadow-md 
      transition duration-300 ease-in-out
      w-1/2  /* Ocupa el 50% */
      mr-2   /* Margen derecho */
    "
              >
                📱 WhatsApp
              </a>

              {/* Botón de Detalles: Clase ajustada a w-1/2, con un estilo de botón "secundario" */}
              <button
                className="
      flex items-center justify-center
      bg-transparent hover:bg-gray-100 
      text-gray-700 
      font-bold 
      py-2 px-4 
      rounded-lg
      transition duration-300 ease-in-out
      w-1/2  /* Ocupa el 50% */
      ml-2   /* Margen izquierdo */
      border border-gray-300 /* Borde sutil */
    "
              // onClick={() => handleViewDetails(p.id)} 
              >
                🔍 Detalles
              </button>

            </div>


          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductList;