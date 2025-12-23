import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CarritoProvider } from "./context/CarritoContext";


import Home from "./pages/Home";
import Login from "./pages/Login";


import NotFound from "./pages/NotFound";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import Header from "./components/header";
import Footer from "./components/Footer";
import ProductManager from "./layouts/ProductManager";
import ProductList from "./components/productList";
import ProductManagerPantalones from "./layouts/ProductManagerPantalones";
import ProductListPantalones from "./components/productListPantalones";
import ProductManagerBlusas from "./layouts/ProductManagerBlusas";
import ProductListBlusas from "./components/productListBlusas";

import ProductManagerVestidos from "./layouts/ProductManagerVestidos";
import ProductListVestidos from "./components/productListVestidos";


import ProductManagerFaldas from "./layouts/ProductManagerFaldas";
import ProductListFaldas from "./components/productListFaldas";

import Carrito from "./pages/Carrito";

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
    <CarritoProvider>
     {/*// 💡 CORRECCIÓN CRÍTICA PARA MÓVIL: Añadir 'overflow-x-hidden' y asegurar 'min-h-screen'
    // Esto previene el scroll horizontal causado por elementos que desbordan la pantalla*/}
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* 🔹 Header y Footer estarán siempre visibles */ }
      <Header rol={rol} cerrarSesion={cerrarSesion} />

      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ProductList />} />
           <Route path="/productListPantalones" element={<ProductListPantalones />} />
            <Route path="/productListBlusas" element={<ProductListBlusas />} />
            <Route path="/productListFaldas" element={<ProductListFaldas />} />
            <Route path="/productListVestidos" element={<ProductListVestidos />} />
            <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Route>

        {/* Rutas de administrador */}
        {rol === "administrador" && (
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Home />} />
            <Route path="/admin/ProductManager" element={<ProductManager />} />
            <Route path="/admin/ProductManagerPantalones" element={<ProductManagerPantalones />} />
            <Route path="/admin/ProductManagerBlusas" element={<ProductManagerBlusas />} />
            <Route path="/admin/ProductManagerFaldas" element={<ProductManagerFaldas />} />
             <Route path="/admin/ProductManagerVestidos" element={<ProductManagerVestidos />} />
          </Route>
        )}

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
     </div >
     </CarritoProvider >
  );
}

export default App;
