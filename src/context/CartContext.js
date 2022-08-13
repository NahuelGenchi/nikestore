import { createContext, useState } from "react";
import "./CartContext.scss";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const addItem = { ...item, quantity: quantity };
    setCart([...cart, addItem]);
  };

  const removeItem = itemId => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = itemId => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === itemId) {
        return true;
      };
    };
  };

  return(
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart
      }}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;