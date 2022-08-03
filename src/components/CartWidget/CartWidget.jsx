import { Link } from "react-router-dom";
import "./CartWidget.scss";

const CartWidget = function() {
  return (
    <Link to={`/cart`}><ion-icon name="cart"></ion-icon></Link>
  );
};

export default CartWidget;