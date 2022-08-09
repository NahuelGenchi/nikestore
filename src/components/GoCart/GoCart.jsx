import { Link } from "react-router-dom";

import "./GoCart.scss";

const GoCart = (props) => {
  return(
    <Link to={`/cart`} className="gocart-link" style={props.style}>
      <button>Go to cart</button>
    </Link>
  );
};

export default GoCart;