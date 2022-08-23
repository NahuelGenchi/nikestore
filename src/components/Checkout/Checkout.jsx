import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "./Checkout.scss";

export const useCart = () => useContext(CartContext);

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [orderId, setOrderId] = useState();

  const { cart, totalQuantity, clearCart } = useCart();

  const navigate = useNavigate();

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  };

  console.log(buyer);

  const finishOrder = (e) => {
    const db = getFirestore();
    e.preventDefault();

    if (Object.values(buyer).length !== 3) {
      alert("All fields are required!");
    } else {
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, {
        buyer,
        items: cart,
        total: totalQuantity,
        date: serverTimestamp()
      })
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch(error => console.log(error));
    };
  };

  return (
    <div className="checkout-container">
      {
        !orderId ?
          <div className="checkout-data">
            <h1>Complete your data</h1>
            <form className="cd-form" onSubmit={finishOrder}>
              <label htmlFor="name" id="name-label">
                <p>Full name:</p>
              </label>
              <input type="text" placeholder="John Doe" name="name" id="name" onChange={buyerData}/>
              <label htmlFor="phone">
                <p>Phone number:</p>
              </label>
              <input type="tel" placeholder="+54 11 6283-8700" name="phone" onChange={buyerData}/>
              <label htmlFor="email">
                <p>E-mail:</p>
              </label>
              <input type="email" placeholder="nahuelgenchi@gmail.com" name="email" onChange={buyerData}/>
              <input type="submit" value="Submit order"/>
            </form>
          </div>
          :
          <div className="checkout-done">
            <p className="cd-thanks">Thank you!</p>
            <p className="cd-order">Your order is: {orderId}</p>
            <button onClick={() => navigate('/')}>Go home</button>
          </div>
      }
    </div>
  );
};

export default Checkout;