import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Login({ onLogin }) {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('usuario');


  const [correo1, setCorreo1] = useState('');
  const [password1, setPassword1] = useState('');
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState(''); // Estado para mensajes (sustituye alerts)

  const [mostrarContraseña, setMostrarContraseña] = useState(false);


  //---------Para el registro-----------------------------------
  const crearUsuario = async () => {
    setMensaje('');
    try {
      await axios.post('http://localhost:5000/api/usuarios', {
        // await axios.post('https://backend-sistema-evaluacion.onrender.com/api/usuarios', {
        nombre,
        correo,
        password,
        rol,
        //  correo1,
        // password1,

      });
      alert('Usuario creado');
      setNombre('');
      setCorreo('');
      setPassword('');
      setRol('administrador');
    } catch (err) {
      alert('Error al crear usuario');
      console.error(err);
    }
  };
  //---------------------------Para el ingreso-----------------------------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login',
        //const res = await fetch('https://backend-sistema-evaluacion.onrender.com/api/auth/login',
      
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ correo: correo1, password: password1 }),
        });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('rol', data.rol);
        localStorage.setItem('nombreUsuario', data.nombre); //  Se guarda el nombre
       
        console.log("Login exitoso:", data);

        if (onLogin) onLogin(data.rol);

        // 🔹 Redirigimos según el rol
      if (data.rol === "admin" || data.rol === "administrador") {
        navigate("/admin");
      } else {
        navigate("/"); // usuario normal → página principal
      }


      } else {
        alert(data.mensaje || 'Error al iniciar sesión');
      }
    } catch (err) {
      alert("Error de red o del servidor");
      console.error(err);
    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-16">
      {/* FORMULARIO DE INICIO DE SESIÓN */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-teal-600">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 bg-white p-6 rounded shadow">
          <input
            type="text"
            value={correo1}
            onChange={(e) => setCorreo1(e.target.value)}
            placeholder="email"
            required
            className="border border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type={mostrarContraseña ? 'text' : 'password'}
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="Contraseña"
            required
            className="border border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <button
            type="button"
            onClick={() => setMostrarContraseña(!mostrarContraseña)}
            className="border border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {mostrarContraseña ? 'Ocultar password' : 'Mostrar password'}
          </button>


          <button
            type="submit"
            className="bg-teal-500 text-white w-full py-2 rounded hover:bg-teal-600 transition">
            Entrar
          </button>
        </form>
      </div>


      {/*------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      {/* FORMULARIO DE REGISTRO */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center text-teal-600">
          Registrarse
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            crearUsuario();
          }}
        >
          <input
            type="text"
            //placeholder="Nombre completo"
            className="border p-2 mb-2 w-full" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)}
          // className="border border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            //  placeholder="Correo electrónico"
            // className="border border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
            className="border p-2 mb-2 w-full" placeholder="Correo electronico" value={correo} onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            //type="password"
            // placeholder="Contraseña"
            // className="border border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
            className="border p-2 mb-2 w-full" placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)}

          />

          {/*<button onClick={crearUsuario} className="bg-blue-600 text-white px-4 py-2 rounded">Crear cuenta</button>*/}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" >
            Crear cuenta
          </button>

        </form>
      </div>
    </div>
  );
};

//export default Login;
