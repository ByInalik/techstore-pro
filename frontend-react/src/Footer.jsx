import landscape from "./assets/footer-landscape.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full bg-[#f7f7f2] text-texto overflow-hidden">
      {/* ═══════════════════════════════════════════
          CONTENIDO PRINCIPAL (ancho limitado y centrado)
      ═══════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-6 md:px-14 pt-16 pb-12">

        {/* ── Grid de 12 columnas ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* ══ Columna 1: Marca + descripción + redes ══ */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Logo + nombre */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-verde flex items-center justify-center text-white text-xs font-bold">
                ✦
              </span>
              <span className="text-xl font-bold tracking-tight">
                TechStore Pro
              </span>
            </div>

            {/* Descripción */}
            <p className="text-sm text-texto-dim leading-relaxed max-w-xs">
              Tecnología verificada, envíos rápidos y soporte real.
              Productos seleccionados para tu día a día.
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-4 text-texto-dim">
              <a
                href="#"
                aria-label="X (Twitter)"
                className="hover:text-verde transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-verde transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Indicador de estado */}
            <div className="flex items-center gap-2 text-sm text-texto-dim mt-2">
              <span className="w-2 h-2 rounded-full bg-verde" />
              <span>Servicios en línea</span>
            </div>
          </div>

          {/* ══ Columna 2: Producto ══ */}
          <div className="md:col-span-2 md:pt-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-texto-dim/70">
              Producto
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-texto">
              <li><a href="#productos" className="hover:text-verde transition-colors">Catálogo</a></li>
              <li><a href="#ofertas" className="hover:text-verde transition-colors">Ofertas</a></li>
              <li><a href="#novedades" className="hover:text-verde transition-colors">Novedades</a></li>
              <li><a href="#faq" className="hover:text-verde transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* ══ Columna 3: Compañía ══ */}
          <div className="md:col-span-2 md:pt-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-texto-dim/70">
              Compañía
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-texto">
              <li><a href="#nosotros" className="hover:text-verde transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-verde transition-colors">Contacto</a></li>
              <li><a href="#blog" className="hover:text-verde transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* ══ Columna 4: Legal ══ */}
          <div className="md:col-span-3 md:pt-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-texto-dim/70">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-texto">
              <li><a href="#" className="hover:text-verde transition-colors">Envíos y devoluciones</a></li>
              <li><a href="#" className="hover:text-verde transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-verde transition-colors">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>

        {/* ── Barra inferior ── */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-texto-dim">
          <p>© {year} TechStore Pro.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-verde transition-colors">
              Iniciar sesión
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 font-semibold text-texto hover:text-verde transition-colors"
            >
              Crear cuenta
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          IMAGEN DECORATIVA (full-width) con degradado hacia arriba
      ═══════════════════════════════════════════ */}
      <div className="relative w-full h-56 md:h-72 lg:h-96">
        <img
          src={landscape}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />

        {/* Degradado hacia arriba: crema → transparente */}
        {/* Degradado superior (funde con el texto) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f7f2] via-transparent to-transparent" />
        {/* Viñeta sutil abajo (oscurece un poco la base para dar profundidad) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
    </footer>
  );
}

export default Footer;