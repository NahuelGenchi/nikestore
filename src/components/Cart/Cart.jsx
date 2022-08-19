import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./Cart.scss";

const Cart = () => {
  const { cart, removeItem, clearCart, totalQuantity } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalFor = 0;
    for (let i = 0; i < cart.length; i++) {
      let itemPriceTotal = cart[i].price * cart[i].quantity;
      totalFor += itemPriceTotal;
    };
    setTotal(totalFor);
  }, [cart]);

  return(
    <div className="cartSection">
      <h1 className="cart-title">Cart <span>({totalQuantity})</span></h1>
      <p className="cart-noitems" style={{display: cart.length > 0 && "none"}}>There are no items in the cart.</p>
      <div className="cart-options" style={{display: cart.length > 0 ? "inherit" : "none"}}>
        <button className="co-clear" onClick={() => clearCart()}>Clear cart</button>
      </div>
      <div className="cart-options" style={{display: cart.length > 0 && "none"}}>
        <Link to={`/`} className="co-clear">Continue shopping</Link>
      </div>
      {cart.map((product, index) => {
        return(
          <div className="cart-product" key={index}>
            <div className="cp-start">
              <div className="cp-img-container">
                <img src={product.img} alt="" />
              </div>
              <div className="cp-info">
                <span className="cpi-title">{product.title}</span>
                <p className="cpi-delete" onClick={() => removeItem(product.id)}>Delete</p>
              </div>
            </div>
            <div className="cp-end">
              <div className="cpe-container">
                <span>Quantity: {product.quantity}</span>
                <p className="cpi-price">{product.price * product.quantity}</p>
                <p className="cpi-delete" onClick={() => removeItem(product.id)}>Delete</p>
              </div>
            </div>
          </div>
        );
      })}
      <p className="cart-total" style={{display: cart.length < 1 && "none"}}>Total: ${total}</p>
      <div className="cart-payment" style={{display: cart.length < 1 && "none"}}>
        <button className="co-clear">Proceed to payment</button>
      </div>
    </div>
  );
};

export default Cart;