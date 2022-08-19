import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import nikeLogo from "../../assets/logo_nike.svg";

import "./Navbar.scss";

const NavBar = function () {
  const [toggleMenu, setToggleMenu] = useState(false);

  const changeMenu = () => {
    toggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
  };

  return (
    <div className='navBigContainer'>
      <div className='navContainer'>
        <div className='navLogo'>
          <Link to={`/`}>
            <img src={nikeLogo} alt="Nike logo" />
          </Link>
        </div>
        <div className="nc-menu-mobile">
          <CartWidget/>
          <div className="ncmm-icon" onClick={changeMenu}>
            <ion-icon name="menu"></ion-icon>
          </div>
          <nav className="ncmm-list" style={{display: toggleMenu === true ? "flex" : "none"}}>
            <div className="ncmml-topbar">
              <img src={nikeLogo} alt="Nike logo"/>
              <button onClick={changeMenu}><ion-icon name="close"></ion-icon></button>
            </div>
            <ul>
              {["shoes", "t-shirt", "pants"].map((category, index) => (
                <li key={index} onClick={changeMenu}>
                  <NavLink to={`/category/${category}`}>{category}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <nav className="nc-menu-desktop">
          <ul>
            {["shoes", "t-shirt", "pants"].map((category, index) => (
              <li key={index}>
                <NavLink to={`/category/${category}`}>{category}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <CartWidget className="cartDesktop"/>
      </div>
    </div>
  );
};

export default NavBar;