import "./Item.scss";

const Item = function({product}) {
  console.log(product)
  return(
    <div className="item">
      <img className="item-img" src={product.img} alt="Product"/>
      <p className="item-title">{product.title}</p>
      <p className="item-price">{product.price}</p>
      <button className="item-details">View details</button>
    </div>
  );
};

export default Item;