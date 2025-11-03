// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cerrarSesion, rol }) => {
  return (
    <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">
        <span className="text-black">ISA</span>
        <span className="text-teal-500">ELA</span>
      </h1>

      <nav className="flex items-center gap-6">


        {/* Si no está logueado o no es administrador */}
        {!rol || rol !== "administrador" ? (
          <>

            <Link
              to="/"
              className="text-gray-700 hover:text-teal-500 text-sm font-medium ml-4"
            >
              Home
            </Link>

            <Link
              to="/Login"
              className="text-gray-700 hover:text-teal-500 text-sm font-medium"
            >
              Iniciar sesión
            </Link>


          </>
        ) : null}

        {/* Si está logueado, mostrar "Cerrar sesión" */}
        {rol && (
          <button
            onClick={cerrarSesion}
            className="text-gray-700 hover:text-red-500 text-sm font-medium"
          >
            Cerrar sesión
          </button>
        )}

        {/* Icono de carrito */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-teal-500 cursor-pointer hover:text-teal-700 transition-transform duration-200 hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
