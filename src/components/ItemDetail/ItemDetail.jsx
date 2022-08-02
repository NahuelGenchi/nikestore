import { ItemCount } from "../index";

import "./ItemDetail.scss";

const ItemDetail = function({productDetail}) {
  const { id, img, title, description, price, stock } = productDetail[0];
  console.log(id);
  return (
    <>
      <img src={img} alt={title} className="desc-img"/>
      <div className="desc-info">
        <h1 className="desc-info-title">{title}</h1>
        <p className="desc-info-stock">{stock === 0 ? "Not available" : `${stock} left`}</p>
        <p className="desc-info-price">{price}</p>
        <p className="desc-info-description">{description}</p>
        <ItemCount stock={stock}/>
      </div>
    </>
  );
};

export default ItemDetail;