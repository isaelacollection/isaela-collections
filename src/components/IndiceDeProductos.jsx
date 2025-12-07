import blazer1 from "../assets/blazer1.jpg";
import blazer2 from "../assets/blazer2.jpg";
import blazer3 from "../assets/blazer3.jpg";
import blazer4 from "../assets/blazer4.jpg";
import blazer5 from "../assets/blazer5.jpg";


const IndiceDeProductos = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">

      {/* Tarjeta 1 */}
      <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
        <img
          src={blazer1}
          alt="Blazer 1"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-center mt-2 font-semibold">Opción 1</h3>
      </button>

      {/* Tarjeta 2 */}
      <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
        <img
          src={blazer2}
          alt="Blazer 2"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-center mt-2 font-semibold">Opción 2</h3>
      </button>

      {/* Tarjeta 3 */}
      <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
        <img
          src={blazer3}
          alt="Blazer 3"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-center mt-2 font-semibold">Opción 3</h3>
      </button>

      {/* Tarjeta 4 */}
      <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
        <img
          src={blazer4}
          alt="Blazer 4"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-center mt-2 font-semibold">Opción 4</h3>
      </button>

      {/* Tarjeta 5 */}
      <button className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
        <img
          src={blazer5}
          alt="Blazer 5"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-center mt-2 font-semibold">Opción 5</h3>
      </button>

    </div>
  );
}
export default IndiceDeProductos;