import { Link } from "react-router-dom";
import "./CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = function() {
  const { cart } = useContext(CartContext);

  return (
      <div className="cart-widget">
        <Link to={`/cart`}><ion-icon name="cart"></ion-icon></Link>
        <span>{cart.length}</span>
      </div>
  );
};

export default CartWidget;