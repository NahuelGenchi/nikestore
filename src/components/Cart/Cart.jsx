import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Cart.scss";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  return(
    <div className="cartSection">
      <h1 className="cart-title">Cart <span>({cart.length})</span></h1>
      <div className="cart-options" style={{display: cart.length > 0 ? "inherit" : "none"}}>
        <button className="co-clear" onClick={() => clearCart()}>Clear cart</button>
      </div>
      {cart.map((product, index) => {
        return(
          <div className="cart-product" key={index}>
            <div className="cp-img-container">
              <img src={product.img} alt="" />
            </div>
            <div className="cp-info">
              <span className="cpi-title">{product.title}</span>
              <p className="cpi-price">{product.price}</p>
              <p className="cpi-delete" onClick={() => removeItem(product.id)}>Delete</p>
            </div>
          </div>
        );
      })}
      <p className="cart-total">Total: ${total}</p>
    </div>
  );
};

export default Cart;