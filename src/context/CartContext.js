import { createContext, useState } from "react";
import "./CartContext.scss";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  //add to cart
  const addToCart = (item, quantity) => {
    const addItem = { ...item, quantity: quantity };
    setCart([...cart, addItem]);
    // verify if an item is inside the cart or not
  };

  return(
    <CartContext.Provider
      value={{
        cart,
        addToCart
      }}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;