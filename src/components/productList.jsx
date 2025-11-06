import { useState, useEffect } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      http://localhost:5000/api/upload
      try {
       const res = await fetch("https://api-ten-jet.vercel.app/products");
       // const res = await fetch("http://localhost:5000/api/products");
       // const res = await fetch(" https://server-backend-vf5p.onrender.com/api/products");
        //
        // Asegúrate de manejar la respuesta si res.ok es false (ej: 404 o 500)
        if (!res.ok) throw new Error("Error al cargar los productos");

        const data = await res.json();
        setProductos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductos();

    // El array de dependencia vacío ([]) asegura que este efecto
    // solo se ejecute una vez, después del render inicial.
  }, []);

  // La parte de 'return' para la renderización (no se ve completa)
  return (
    <section className="main-content">

      <h2 className="title">Productos</h2>
      {error && <p className="error-message">{error}</p>}
      < div className="products">


        {productos.map((p) => (
          < div className="product-card" key={p.id} >
            <img
              src={p.image}
              alt={p.nombre}
              className="product-image"
            />
            <h3 className="product-name">{p.nombre}</h3>
            <p className="product-price">${p.precio}</p>
            <p className="product-stock">{}</p>
            


          </div>
        ))}

      </div>
    </section >
  );
};

export default ProductList; // Asumiendo que se exporta