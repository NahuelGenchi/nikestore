import { Link } from "react-router-dom";

import "./Item.scss";

const Item = function({product}) {
  return(
    <div className="item">
      <img className="item-img" src={product.img} alt="Product"/>
      <p className="item-title">{product.title}</p>
      <p className="item-price">{product.price}</p>
      <Link to={`/item/${product.id}`} className="item-details">
        View details
      </Link>
    </div>
  );
};

export default Item;