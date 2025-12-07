import ProductList from "../components/productList";
import IndiceDeProductos from "../components/IndiceDeProductos";


const Home = () => {
  return (
    <div>
     {/** <h2 className="text-2xl font-bold mb-4 text-gray-800">Productos Disponibles</h2> */} 
    {/*  <ProductList />   {/*el metodo que esta en la clase productList */}
    <IndiceDeProductos />
    </div>
  );
};

export default Home;
