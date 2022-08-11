import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Cart.scss";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return(
    <div className="cartSection">
      <h1 className="cart-title">Cart</h1>
      {cart.map((product) => {
        return(
          <h2>{product.title}</h2>
        );
      })}
    </div>
  );
};

export default Cart;