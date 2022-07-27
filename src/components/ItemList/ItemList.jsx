import { Item } from "../index";

import "./ItemList.scss";

const ItemList = function({productList}) {
  return(
    <div className="item-list">
      {productList.map((product) => <Item key={product.id} product={product}/>)}
    </div>
  );
};

export default ItemList;