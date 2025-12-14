import { useState } from "react"; // 👈 Importar useState
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
    // 1. Estado para controlar si el sidebar está visible
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Función para alternar el estado
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            
            {/* Botón de Hamburguesa para Móviles */}
            {/* Solo visible en pantallas pequeñas (oculto en md: en adelante) */}
            <button
                onClick={toggleSidebar}
                className="md:hidden p-4 text-gray-700 bg-white shadow-md z-30"
                aria-label="Toggle Menu"
            >
                {/* Ícono de Hamburguesa (puedes usar un SVG aquí) */}
                {isSidebarOpen ? '✕ Cerrar' : '☰ Menú'}
            </button>


            {/* Contenedor Principal: Lado a Lado en Escritorio, Flotante en Móvil */}
            <div className="flex flex-1">
                
                {/* 2. Sidebar: Usa clases condicionales para deslizar fuera/dentro */}
                <div 
                    className={`
                        fixed md:static // Fijo para flotar en móvil, estático en escritorio
                        top-0 left-0 // Posición inicial
                        h-full w-64 z-20 // Ancho y altura
                        bg-[#f1f0e7] text-black flex flex-col p-4 
                        transition-transform duration-300 ease-in-out
                        // CLASES CONDICIONALES
                        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                        md:translate-x-0 // Siempre visible en escritorio
                        md:w-60 // Ancho fijo en escritorio
                    `}
                >
                    <Sidebar />
                </div>

                {/* 3. Overlay (sombra) cuando el menú está abierto en móvil */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                        onClick={toggleSidebar} // Cierra el menú al hacer clic fuera
                    ></div>
                )}


                {/* Contenido principal dinámico */}
                <main className="flex-1 p-6 overflow-y-auto bg-white">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;