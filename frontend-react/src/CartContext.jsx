import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const guardado = localStorage.getItem("carrito");
      if (!guardado) return [];
      
      // Si por error se guardó un texto plano o "[object Object]", evitamos que rompa
      if (guardado.startsWith("[object")) {
        localStorage.removeItem("carrito");
        return [];
      }

      return JSON.parse(guardado);
    } catch (error) {
      console.error("Error al parsear el carrito del localStorage:", error);
      localStorage.removeItem("carrito");
      return [];
    }
  });

  // Cada vez que cambia el carrito, se guarda solo
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(items));
  }, [items]);

  function agregarAlCarrito(producto) {
    const existe = items.find((item) => item.id === producto.id);
    if (existe) {
      setItems(
        items.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        )
      );
    } else {
      setItems([...items, { ...producto, cantidad: 1 }]);
    }
  }

  function cambiarCantidad(id, cambio) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + cambio }
          : item,
      )
    );
  }

  function quitarDelCarrito(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function vaciarCarrito() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        agregarAlCarrito,
        cambiarCantidad,
        quitarDelCarrito,
        vaciarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
}