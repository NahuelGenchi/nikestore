import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

import "./Navbar.scss";

const NavBar = function () {
  return (
    <div className='navBigContainer'>
      <div className='navContainer'>
        <div className='navLogo'>
          <Link to={`/`}><span>NIKE</span></Link>
        </div>
        <nav>
          <ul>
            {["shoes", "t-shirt", "pants"].map((category, index) => (
              <li key={index}>
                <NavLink to={`/category/${category}`}>{category}</NavLink>
              </li>
            ))}

          </ul>
        </nav>
        <CartWidget/>
      </div>
    </div>
  );
};

export default NavBar;