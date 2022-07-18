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
            <li><a href='#a'><ion-icon name="home"></ion-icon></a></li>
            <li><a href='#b'><ion-icon name="information-circle"></ion-icon></a></li>
            <li><a href='#c'><ion-icon name="heart"></ion-icon></a></li>
            <li><a href='#d'><ion-icon name="cart"></ion-icon></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;