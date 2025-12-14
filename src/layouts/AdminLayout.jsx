import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

    <div className="flex h-screen">
      {/* Sidebar fijo a la izquierda */}
      <div className="w-60 bg-[#f1f0e7] text-black flex flex-col p-4">
        <Sidebar />
      </div>

      {/* Contenido principal dinámico */}
      <main className="flex-1 p-6 overflow-y-auto bg-white">
        <Outlet />
      </main>
    </div>
     </div>
  );
};

export default AdminLayout;
