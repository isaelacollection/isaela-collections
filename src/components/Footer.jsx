// Footer.jsx o donde tengas tu pie de página
const Footer = () => {
  return (
    // 1. Contenedor Principal: Color de fondo y espacio
    <footer className="bg-gray-800 text-white mt-10 p-10">
      
      {/* 2. Contenedor Grid Responsivo: 3 Columnas en escritorio, 1 en móvil */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Logo y Descripción (Trendy) */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-pink-400">ISAELA  COLLECTION</h3>
          <p className="text-sm">
            ISAELA COLLECTION, nos especializamos en ofrecer ropa moderna y de calidad para todos los estilos.
          </p>
        </div>

        {/* Columna 2: Compañía */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-1">COMPAÑÍA</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition">Hogar</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Política de privacidad</a></li>
          </ul>
        </div>

        {/* Columna 3: Contáctenos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-1">CONTÁCTENOS</h3>
          <ul className="space-y-2 text-sm">
            <li>Tel: (0979906565)</li>
            <li>La Gasca, Quito, Ecuador C.A</li>
            <li>Email: isaelacollection@gmail.com</li>
             <li>facebook: isaelacollection@gmail.com</li>
              <li>Tiktok: isaela_collections</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      {/* 3. Sección de Derechos de Autor (Copyright) */}
      <div className="mt-10 pt-4 border-t border-gray-700 text-center text-xs">
        <p>Copyright 2025© edukuk.dev - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
