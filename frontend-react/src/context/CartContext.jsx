import { createContext, useState, useEffect, useCallback } from "react";

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

  const agregarAlCarrito = useCallback((producto) => {
    setItems((prevItems) => {
      const existe = prevItems.find((item) => item.id === producto.id);
      if (existe) {
        return prevItems.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevItems, { ...producto, cantidad: 1 }];
    });
  }, []);

  const cambiarCantidad = useCallback((id, cambio) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(1, item.cantidad + cambio) }
          : item
      )
    );
  }, []);

  const quitarDelCarrito = useCallback((id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const vaciarCarrito = useCallback(() => {
    setItems([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        agregarAlCarrito,
        cambiarCantidad,
        quitarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}