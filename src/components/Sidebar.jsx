import { Link } from "react-router-dom";

// src/components/Sidebar.jsx
const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-[#f1f0e7] text-black  left-0 top-0 flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Menú</h2>

      <nav className="flex flex-col space-y-3">
        <Link
          to="admin/ProductManager"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition">
          👕 ingresar prenda
        </Link>
        <Link
          to="/AsignarRol"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition">
          👟 Calzado
        </Link>
        <Link
          to="almacenarAccesorio"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition">
          🧢 Accesorios
        </Link>
        <a
          href="#"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition"
        >
          🧒 Niños
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition"
        >
          👩 Damas
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition"
        >
          👨 Caballeros
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
