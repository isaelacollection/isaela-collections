import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SubirProducto from "./pages/subirProducto";

import NotFound from "./pages/NotFound";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import Header from "./components/header";
import Footer from "./components/Footer";
import ProductManager from "./layouts/ProductManager";
import { useNavigate } from "react-router-dom"; // 🔹 Importa esto arriba


function App() {
  const [rol, setRol] = useState(localStorage.getItem("rol") || null);
  // Dentro de tu componente:
  const navigate = useNavigate();



  // Escucha cambios en localStorage (por si se modifica desde otro componente)
  useEffect(() => {
    const handleStorageChange = () => {
      setRol(localStorage.getItem("rol"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // 🔹 Cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("nombreUsuario");
    setRol(null);
    navigate("/");
  };

  // 🔹 Cuando se inicia sesión correctamente
  const handleLogin = (rolUsuario) => {
    console.log("✅ Login exitoso:", rolUsuario);
    setRol(rolUsuario);
    localStorage.setItem("rol", rolUsuario);
  };

  return (
    <>
      {/* 🔹 Header y Footer estarán siempre visibles */}
      <Header rol={rol} cerrarSesion={cerrarSesion} />

      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Route>

        {/* Rutas de administrador */}
        {rol === "administrador" && (
          <Route element={<AdminLayout />}>
            {/**<Route path="/admin" element={<AdminDashboard />} /> */}
            {/*<Route path="/admin" element={<SubirProducto />} />*/}
            <Route path="/admin" element={<Home />} />
            <Route path="/admin/ProductManager" element={<ProductManager />} />
          </Route>
        )}

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
