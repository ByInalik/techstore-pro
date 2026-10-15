function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full bg-[#f7f7f2] text-black pt-16 pb-0 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ── Sección Superior: Título + Enlaces ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Título en la misma tipografía Sans que el resto de la web */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              Mantente al día
            </h2>
            <p className="mt-3 text-sm text-gray-600 max-w-xs leading-relaxed">
              Tecnología verificada, envíos rápidos y soporte real para tu día a día.
            </p>
          </div>

          {/* Columnas de Navegación */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Columna 1: TIENDA */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black">
                Tienda
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-medium uppercase tracking-wider text-gray-700">
                <li><a href="#laptops" className="hover:text-verde transition-colors">Laptops</a></li>
                <li><a href="#monitores" className="hover:text-verde transition-colors">Monitores</a></li>
                <li><a href="#audio" className="hover:text-verde transition-colors">Audio</a></li>
                <li><a href="#componentes" className="hover:text-verde transition-colors">Componentes</a></li>
                <li><a href="#ofertas" className="hover:text-verde transition-colors">Ofertas</a></li>
              </ul>
            </div>

            {/* Columna 2: EXPLORAR */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black">
                Explorar
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-medium uppercase tracking-wider text-gray-700">
                <li><a href="#nosotros" className="hover:text-verde transition-colors">Nosotros</a></li>
                <li><a href="#resenas" className="hover:text-verde transition-colors">Reseñas</a></li>
                <li><a href="#blog" className="hover:text-verde transition-colors">Blog</a></li>
                <li><a href="#novedades" className="hover:text-verde transition-colors">Novedades</a></li>
              </ul>
            </div>

            {/* Columna 3: SOPORTE */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-black">
                Soporte
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-medium uppercase tracking-wider text-gray-700">
                <li><a href="#contacto" className="hover:text-verde transition-colors">Contacto</a></li>
                <li><a href="#seguimiento" className="hover:text-verde transition-colors">Rastrear Pedido</a></li>
                <li><a href="#devoluciones" className="hover:text-verde transition-colors">Devoluciones</a></li>
                <li><a href="#garantia" className="hover:text-verde transition-colors">Garantía</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Línea Inferior de Info / Copyright ── */}
        <div className="flex items-center gap-6 text-xs text-gray-600 mb-6 font-medium">
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-black">
            <span>🇨🇴 ES</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p>©{year} TechStore Pro. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* ── Nombre Gigante de la Marca en el fondo ── */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none">
        <h1 className="text-[17vw] font-extrabold text-black tracking-tighter text-center uppercase leading-[0.75] translate-y-2">
          TECHSTORE
        </h1>
      </div>
    </footer>
  );
}

export default Footer;