import { useContext, useState } from "react";
import { ItemCount, GoCart } from "../index";
import { CartContext } from "../../context/CartContext";

import "./ItemDetail.scss";

const ItemDetail = function({productDetail}) {
  const { id, img, title, description, price, stock } = productDetail;
  const [amountItem, setAmountItem] = useState(0);

  const { addItem, isInCart } = useContext(CartContext);

  const onAdd = (amount) => {
    setAmountItem(amount);
    addItem(productDetail[0], amount);
  };

  const countDisplay = (itemId) => {
    return isInCart(itemId);
  };

  return (
    <>
      <img src={img} alt={title} className="desc-img"/>
      <div className="desc-info">
        <h1 className="desc-info-title">{title}</h1>
        <p className="desc-info-stock">{stock === 0 ? "Not available" : `${stock} left`}</p>
        <p className="desc-info-price">{price}</p>
        <p className="desc-info-description">{description}</p>
        <ItemCount stock={stock} onAdd={onAdd} style={{display: `${(amountItem >= 1 || countDisplay(id)) && "none"}`}}/>
        <GoCart style={{display: `${(amountItem || countDisplay(id)) ? "inherit" : "none"}`}}/>
      </div>
    </>
  );
};

export default ItemDetail;