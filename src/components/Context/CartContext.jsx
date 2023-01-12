import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      let pos = cart.findIndex((idx) => idx.id === item.id);
      cart[pos].qty += qty;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, qty }]);
    }
  };

  const removeItem = (id) => {
    const productsRemove = cart.filter((prod) => prod.id !== id);
    console.log(productsRemove);
    setCart(productsRemove);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    return cart.length;
  };

  return <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartTotal }}>{children}</CartContext.Provider>;
};
