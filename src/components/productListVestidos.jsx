import { useState, useEffect } from "react";
import { useCarrito } from "../context/CarritoContext";
import "./productList.css";

const ProductListVestidos = () => {
  const [productosVestidos, setProductosVestidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useCarrito();
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        // La URL de tu backend en Render.
        const res1 = await fetch("https://server-backend-vf5p.onrender.com/api/productVestidos");

        // Manejo de errores de respuesta HTTP (404, 500, etc.)
        if (!res1.ok) {
          const errorText = await res.text();
          throw new Error(`Error al cargar los productos: ${res1.status}. Detalle: ${errorText.substring(0, 50)}...`);
        }

        const data1 = await res1.json();
        setProductosVestidos(data1);
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
 // Para ver los detalles
  const handleViewDetails = (p) => {
  alert(
    `🛍️ Detalles del producto\n\n` +
    `Categoría: ${p.categoriaVestido}\n` +
    `Nombre: ${p.nombreVestido}\n` +
    `Precio: $${p.precioVestido}\n` +
    `Stock: ${p.stockVestido ?? "No disponible"}\n\n` +
    `Detalle:\n${p.detalleVestido ?? "Sin descripción"}`
  );
};

  // Muestra la lista de productos
  return (
    <section className="main-content">

      <h2 className="title">Productos(Vestidos) Disponibles</h2>
      {/* Muestra el mensaje de error si existe */}
      {error && <p className="error-message">{error}</p>}

      <div className="products">

        {productosVestidos.map((p) => (
          // Usamos p._id o p.id como clave única (key)
          <div className="product-card" key={p._id || p.id} >

            {/* IMPLEMENTACIÓN CLAVE: El contenedor fijo de la imagen (para uniformidad) */}
            <div className="product-image-container">
              <img
                src={p.imageVestido}
                alt={p.nombreVestido}
                className="product-image"
              />
            </div>

            <h3 className="product-name">{p.nombreVestido}</h3>
            <p className="product-price">${p.precioVestido}</p>
            {/* Muestra el stock si está disponible, o un espacio vacío si no lo está */}
            {/** <p className="product-stock">{p.stock ? `Stock: ${p.stock}` : ''}</p>*/}
            <p className="product-stock">{ }</p>


            <button
              onClick={() => agregarAlCarrito({
                _id: p._id,
                nombre: p.nombreVestido,
                precio: p.precioVestido,

              })

              }
              className="mt-2 w-full bg-pink-500 text-white py-2 rounded"
            >
              Añadir 🛒
            </button>


            {/* 🚀 Nueva Sección: Botones de Acción */}
            {/* Contenedor de Acciones: AÑADE ESTAS CLASES */}
            <div className="product-actions flex justify-between items-center p-2 w-full">

              {/* Botón de WhatsApp: Clase ajustada a w-1/2 (50% de ancho) */}
              <a
                href={`https://wa.me/593979906565?text=Hola,%20me%20interesa%20el%20producto:%20${p.nombreVestido}%20que%20vi%20en%20la%20tienda.`}
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
               onClick={() => handleViewDetails(p)} 
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

export default ProductListVestidos;