import { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductCard from "./ProductCard"
import gridPattern from "./assets/grid-pattern.svg"


const productos = [
  {
    nombre: "Mouse Inalambrico",
    descripcion: "Mouse ergonomico, conexion Bluetooth",
    precio: "$89.900",
    imagen: "https://images.pexels.com/photos/7265962/pexels-photo-7265962.jpeg",
  },
  {
    nombre: "Teclado Mecanico",
    descripcion: "Switches azules, retroiluminado RGB",
    precio: "$149.900",
    imagen: "https://images.pexels.com/photos/19708913/pexels-photo-19708913.jpeg"
  },
  {
    nombre: "Monitor 24",
    descripcion: "Full HD, 75Hz, panel IPS",
    precio: "$89.900",
    imagen: "https://images.pexels.com/photos/11288109/pexels-photo-11288109.jpeg"
  },
  {
    nombre: "Audifonos Bluetooth",
    descripcion: "Cancelacion de ruido, 20H de bateria",
    precio: "$199.900",
    imagen: "https://images.pexels.com/photos/6889216/pexels-photo-6889216.jpeg"
  },
  {
    nombre: "Silla Ergonomica",
    descripcion: "Silla ergonómica y cómoda, ideal para oficina o estudio.",
    precio: "$199.900",
    imagen: "https://images.pexels.com/photos/11181042/pexels-photo-11181042.jpeg"
  }
]

function App() {
  const [busqueda, setBusqueda] = useState("")

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f2] text-texto relative">
      {/* Patrón */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${gridPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "800px 800px",
          opacity: 0.5,
        }}
      />

      <main className="min-h-screen max-w-6xl mx-auto px-6 py-10 flex flex-col justify-between gap-10">
        <Navbar />
        <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full max-w-md px-4 py-2 border-2 border-slate-200 rounded-lg"
        />
        <p className="text-sm text-texto-dim whitespace-nowrap">
            {productos.filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase())).length} producto(s) encontrado(s)
        </p>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos
            .filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
            .map((p) => (
            <ProductCard
              key={p.nombre}
              nombre={p.nombre}
              descripcion={p.descripcion}
              precio={p.precio}
              imagen={p.imagen}
              stock={p.stock}
            />
          ))}
        </section>
        {productos.filter((p) =>
            p.nombre.toLowerCase().includes(busqueda.toLowerCase())
          ).length === 0 && (
            <p className="text-center text-texto-dim py-10">
              No se encontraron productos con ese nombre.
            </p>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App