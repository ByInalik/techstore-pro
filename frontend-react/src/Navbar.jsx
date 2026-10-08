function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex items-center justify-between px-8 py-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
      <div className="text-xl font-extrabold text-verde">
        TechStore Pro
      </div>
      <ul className="hidden md:flex gap-6 text-sm font-semibold text-texto-dim">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <button className="bg-verde text-white py-2 px-5 rounded-lg font-bold text-sm">
        Ingresar
      </button>
    </nav>
  );
}

export default Navbar;