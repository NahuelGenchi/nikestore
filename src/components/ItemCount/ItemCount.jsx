import React, { useState } from "react";

import "./ItemCount.scss";

const ItemCount = function(props) {
  const [count, setCount] = useState(1);

  return (
    <div className="il-container__item">
      <div className="il-container__item-c">
        <div className="il-container__item-c-desc">
          <p>{props.name}</p>
        </div>
        <div className="il-container__item-c-input">
          <button className="il-c__i-c-input-more" disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
          <span className="il-c__i-c-input-count">{count}</span>
          <button className="il-c__i-c-input-less" disabled={count >= props.stock} onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
      <button className="il-container__item-button" disabled={props.stock <= 0} onClick={() => props.onAdd(count)} >Add to cart</button>
    </div>
  );
};

export default ItemCount;