import { Link } from "react-router-dom";
import "./CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = function(props) {
  const { cart, totalQuantity } = useContext(CartContext);

  return (
      <div className={`cart-widget ${props.className}`} /*style={{display: cart.length < 1 && "none"}}*/ open={cart.length > 0 ? true : false}>
        <Link to={`/cart`}><ion-icon name="bag-outline"></ion-icon></Link>
        <span>{totalQuantity}</span>
      </div>
  );
};

export default CartWidget;