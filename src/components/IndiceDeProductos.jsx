import Blazers from "../assets/Blazers.jpg";
import Blusas from "../assets/Blusas.jpg";
import Faldas from "../assets/Faldas.jpg";
import Pantalones from "../assets/Pantalones.jpg";
import Obsequio from "../assets/Obsequio.png";
import Vestidos from "../assets/Vestidos.jpg";
import CARTADECOLORES from "../assets/CARTADECOLORES.jpg";
import CAROLINAHERRERA from "../assets/CAROLINAHERRERA .jpg";
import TURIN from "../assets/TURIN.jpg";
import { useNavigate } from "react-router-dom";


const IndiceDeProductos = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">

          {/* Tarjeta 1 */}

          <button onClick={() => navigate("/productList")} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
            <img
              src={Blazers}
              alt="Blazer 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-center mt-2 font-semibold">👆 Blazers </h3>
          </button>

          {/* Tarjeta 2 */}
          <button onClick={() => navigate("/productListPantalones")} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
            <img
              src={Pantalones}
              alt="Blazer 4"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-center mt-2 font-semibold">👆 Pantalones</h3>
          </button>

          {/* Tarjeta 3 */}
          <button onClick={() => navigate("/productListBlusas")} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
            <img
              src={Blusas}
              alt="Blazer 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-center mt-2 font-semibold">👆 Blusas</h3>
          </button>

          {/* Tarjeta 4 */}
          <button onClick={() => navigate("/productListFaldas")} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
            <img
              src={Faldas}
              alt="Blazer 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-center mt-2 font-semibold">👆 Faldas</h3>
          </button>



          {/* Tarjeta 5 */}
          <button onClick={() => navigate("/productListVestidos")} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
            <img
              src={Vestidos}
              alt="Blazer 5"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-center mt-2 font-semibold">👆 Vestidos</h3>
          </button>

        </div >

        {/* Nueva Tarjeta de Regalo (Abajo, ocupando todo el ancho) */}
        <div className="w-full mt-8 mb-6">
          <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col md:flex-row items-center justify-between">

            {/* Columna Izquierda: Imagen de Regalo */}
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">🎁 Regalo</h3>
              <img
                // Utilizo la imagen de Pantalones como ejemplo para el "Regalo"
                src={Obsequio}
                alt="Regalo por Compra"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Columna Derecha: Mensaje */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-4">
                ¡Regalo por tu compra!
              </h2>

              <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                Por la compra de una prenda recibe de regalo una blusa tipo
                <span className="text-pink-500 font-bold"> strapless </span>
                o un
                <span className="text-pink-500 font-bold"> body de algodón</span>.
              </p>
            </div>

          </div>
        </div>
      </div >
    </div>


  );
}
export default IndiceDeProductos;