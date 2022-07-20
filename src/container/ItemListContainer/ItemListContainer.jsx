import { ItemCount } from "../../components";

import "./Header.scss";

const ItemListContainer = function() {
  const onAdd = (products) => {
    console.log(`You've added ${products} products`);
  }

  return (
    <div className="il-container">
      <div className="il-container__sup">
        <ItemCount name="Large T-Shirt" stock={3} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemListContainer;