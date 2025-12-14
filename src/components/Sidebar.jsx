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
          🧥 Ingresar prenda blazers 
        </Link>
        <Link
          to="admin/ProductManagerPantalones"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition">
          👖 Ingresar pantalones
        </Link>

        <Link
          to="admin/ProductManagerBlusas"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition">
          👚 Ingresar blusas
        </Link>

        <Link
          to="admin/ProductManagerFaldas"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition">
          🩳 Ingresar Falda
        </Link>

        <Link
          to="admin/ProductManagerVestidos"
          className="text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-md p-2 transition">
          👗 Ingrsar vestidos
        </Link>
    
      </nav>
    </div>
  );
};

export default Sidebar;
