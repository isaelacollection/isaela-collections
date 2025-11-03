import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// 🟢 CRÍTICO: Importar BrowserRouter
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🟢 CRÍTICO: Envuelve la aplicación aquí */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
