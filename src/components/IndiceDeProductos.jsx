import Blazers from "../assets/Blazers.jpg";
import Blusas from "../assets/Blusas.jpg";
import Faldas from "../assets/Faldas.jpg";
import Pantalones from "../assets/Pantalones.jpg";
import Vestidos from "../assets/Vestidos.jpg";
import { Link } from "react-router-dom";


const IndiceDeProductos = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">

      {/* Tarjeta 1 */}
      <Link to="/productList">
      <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
        <img
          src={Blazers}
          alt="Blazer 1"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-center mt-2 font-semibold">👆 Blazars </h3>
      </button>
    </Link>

      {/* Tarjeta 2 */ }
  <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
    <img
      src={Blusas}
      alt="Blazer 2"
      className="w-full h-48 object-cover rounded-lg"
    />
    <h3 className="text-center mt-2 font-semibold">👆 Blusas</h3>
  </button>

  {/* Tarjeta 3 */ }
  <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
    <img
      src={Faldas}
      alt="Blazer 3"
      className="w-full h-48 object-cover rounded-lg"
    />
    <h3 className="text-center mt-2 font-semibold">👆 Faldas</h3>
  </button>

  {/* Tarjeta 4 */ }
  <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
    <img
      src={Pantalones}
      alt="Blazer 4"
      className="w-full h-48 object-cover rounded-lg"
    />
    <h3 className="text-center mt-2 font-semibold">👆 Pantalones</h3>
  </button>

  {/* Tarjeta 5 */ }
  <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
    <img
      src={Vestidos}
      alt="Blazer 5"
      className="w-full h-48 object-cover rounded-lg"
    />
    <h3 className="text-center mt-2 font-semibold">👆 Vestidos</h3>
  </button>

    </div >
  );
}
export default IndiceDeProductos;