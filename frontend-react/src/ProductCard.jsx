function ProductCard({ imagen, icono, nombre, descripcion, precio, esOferta }) {
  return (
    <div className="group relative flex flex-col h-full p-4 rounded-2xl shadow-md bg-white hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
      
      {/* Badge de Oferta flotante */}
      {esOferta && (
        <span className="absolute top-6 right-6 z-10 bg-red-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow">
          Oferta
        </span>
      )}

      {/* Imagen con zoom sutil al hacer hover */}
      <div className="w-full h-48 mb-3 overflow-hidden rounded-xl bg-gray-100">
        <img 
          src={imagen} 
          alt={nombre} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      {/* Información del producto */}
      <h3 className="font-bold text-base text-gray-900 group-hover:text-verde transition-colors">
        {icono} {nombre}
      </h3>
      <p className="text-gray-500 text-xs mt-1 flex-grow leading-relaxed">{descripcion}</p>
      
      {/* Precio y Botón de Acción */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <span className="text-verde font-extrabold text-lg">{precio}</span>
        <button className="px-3 py-1.5 bg-black text-white text-xs font-bold rounded-lg hover:bg-verde transition-colors">
          + Agregar
        </button>
      </div>
    </div>
  )
}

export default ProductCard;