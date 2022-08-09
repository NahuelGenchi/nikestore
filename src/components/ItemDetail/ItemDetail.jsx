import { useState } from "react";
import { ItemCount, GoCart } from "../index";

import "./ItemDetail.scss";

const ItemDetail = function({productDetail}) {
  const { id, img, title, description, price, stock } = productDetail[0];
  const [amountItem, setAmountItem] = useState(0);

  const onAdd = (amount) => {
    setAmountItem(amount);
  };

  return (
    <>
      <img src={img} alt={title} className="desc-img"/>
      <div className="desc-info">
        <h1 className="desc-info-title">{title}</h1>
        <p className="desc-info-stock">{stock === 0 ? "Not available" : `${stock} left`}</p>
        <p className="desc-info-price">{price}</p>
        <p className="desc-info-description">{description}</p>
        <ItemCount stock={stock} onAdd={onAdd} style={{display: `${amountItem >= 1 && "none"}`}}/>
        <GoCart style={{display: `${amountItem <= 0 ? "none" : "inherit"}`}}/>
      </div>
    </>
  );
};

export default ItemDetail;