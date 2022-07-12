import '../scss/NavBar.scss';
import nike from '../img/nike.png'

const NavBar = function () {
  return (
    <>
      <div className='navBigContainer'>
        <div className='navContainer'>
          <div className='navLogo'>
            <h1>NIKE</h1>
          </div>
          <nav>
            <ul>
              <li><a href='#a'>Home</a></li>
              <li><a href='#b'>Features</a></li>
              <li><a href='#c'>Shopping</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='logoContainer'>
        <img src={nike} alt='Nike logo' className='headerLogoMain' />
        <span className='headerSlogan'>JUST DO IT.</span>
      </div>
    </>
  );
};

export default NavBar;