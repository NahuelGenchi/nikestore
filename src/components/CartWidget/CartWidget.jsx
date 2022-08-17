import { Link } from "react-router-dom";
import "./CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = function() {
  const { cart, totalQuantity } = useContext(CartContext);
  return (
      <div className="cart-widget" style={{display: cart.length < 1 && "none"}}>
        <Link to={`/cart`}><ion-icon name="cart"></ion-icon></Link>
        <span>{totalQuantity}</span>
      </div>
  );
};

export default CartWidget;