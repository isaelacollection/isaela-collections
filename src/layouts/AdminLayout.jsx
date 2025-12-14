import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/*
        ✅ CAMBIO CLAVE: Usar flex-col por defecto (móvil) y flex-row a partir de 'md' (escritorio).
        Esto apila el menú y el contenido en el celular.
        */}
      <div className="flex flex-col md:flex-row min-h-screen">

        {/* Sidebar: En móvil (w-full), toma todo el ancho. 
                En escritorio (md:w-60), toma el ancho fijo de 240px.
            */}
        <div className="w-full md:w-60 bg-[#f1f0e7] text-black flex flex-col p-4">
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