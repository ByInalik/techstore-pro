import { useNavigate } from 'react-router-dom';
import SplitText from './components/SplitText'; 
import StarBorder from './components/StarBorder';

function Home() {
  const navegar = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-20 px-4 min-h-[70vh]">
      
      <SplitText
        text="Bienvenido a TechStore Pro"
        className="text-4xl md:text-6xl font-extrabold text-verde tracking-tight"
        delay={50}
        duration={0.8}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      <p className="text-texto-dim max-w-lg text-lg md:text-xl leading-relaxed mt-2">
        Tecnología de calidad, al mejor precio. Explora nuestro catálogo de productos.
      </p>

      <div className="mt-6">
        <StarBorder
          as="button"
          onClick={() => navegar('/productos')}
          color="#ffffff"          // Color de la estrella animada (blanco)
          speed={4}                // Velocidad de la animación
          thickness={2}            // Grosor del borde
          radius={12}              // Redondeo del botón (rounded-xl)
          
          backgroundColor="#16a34a" // El fondo verde de tu marca (bg-verde)
          textColor="#ffffff"       // Color del texto
          borderColor="rgba(255,255,255,0.2)" // Borde sutil por defecto
          
          className="font-bold text-lg hover:brightness-110 transition-all"
        >
          Ver catálogo
        </StarBorder>
      </div>

    </div>
  );
}

export default Home;