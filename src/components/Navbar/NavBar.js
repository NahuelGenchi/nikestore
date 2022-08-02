import CartWidget from "../CartWidget/CartWidget";

import "./Navbar.scss";

const NavBar = function () {
  return (
    <div className='navBigContainer'>
      <div className='navContainer'>
        <div className='navLogo'>
          <h1>NIKE</h1>
        </div>
        <nav>
          <ul>
            {["home", "about", "products", "contact"].map((item) => (
              <li key={item}>
                <a href={item === "home" ? "/" : `#${item}`}>{item}</a>
              </li>
            ))}
            <CartWidget />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;