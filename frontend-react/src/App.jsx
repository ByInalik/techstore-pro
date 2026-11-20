import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Carrito from "./pages/Carrito"
import PagoResultado from './pages/PagoResultado';
import MisPedidos from './pages/MisPedidos';
import Cuenta from './pages/Cuenta';
import CuentaResumen from './pages/CuentaResumen';
import CuentaPerfil from './pages/CuentaPerfil';
import NotFound from "./pages/NotFound";
 
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pago/:referencia" element={<PagoResultado />} />
          <Route path="/cuenta" element={<Cuenta />}>
            <Route index element={<CuentaResumen />} />
            <Route path="perfil" element={<CuentaPerfil />} />
            <Route path="pedidos" element={<MisPedidos />} />
          </Route>
          <Route path="/mis-pedidos" element={<Navigate to="/cuenta/pedidos" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
