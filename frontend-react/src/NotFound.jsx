import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#f7f7f2] text-[#1a1a1a] flex flex-col items-center justify-center font-sans overflow-hidden relative px-4">
      
      {/* ── Número 404 Gigante ── */}
      <h1 
        className="text-[55vw] md:text-[45vw] lg:text-[38vw] font-black leading-[0.75] tracking-tighter text-center select-none"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        404
      </h1>

      {/* ── Mensaje y Enlaces ── */}
      <div className="flex flex-col items-center text-center mt-6 md:mt-10 z-10">
        <p className="font-bold uppercase text-sm md:text-xl tracking-wide mb-1">
          Página no encontrada
        </p>
        <p className="font-bold uppercase text-sm md:text-xl tracking-wide mb-3">
          Volvamos a lo importante
        </p>
        
        <div className="flex gap-2 font-bold uppercase text-sm md:text-xl tracking-wide">
          <Link to="/" className="underline underline-offset-4 decoration-2 hover:text-gray-500 transition-colors">
            Inicio
          </Link>
          <span>,</span>
          <Link to="/productos" className="underline underline-offset-4 decoration-2 hover:text-gray-500 transition-colors">
            Productos
          </Link>
          <span>,</span>
          <Link to="/ofertas" className="underline underline-offset-4 decoration-2 hover:text-gray-500 transition-colors">
            Ofertas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;