import { createContext, useState } from "react";
import "./CartContext.scss";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  //add to cart
  const addItem = (item, quantity) => {
    const addItem = { ...item, quantity: quantity };
    setCart([...cart, addItem]);
    // verify if an item is inside the cart or not
  };

  const removeItem = itemId => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  return(
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem
      }}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;