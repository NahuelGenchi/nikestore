import "./Footer.scss";

const Footer = () => {
  return(
    <footer className="footer">
      <div className="f-container">
        <div className="fc-links">
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="mail"></ion-icon>
        </div>
        <div className="fc-location">
          <ion-icon name="location"></ion-icon>
          <span>Argentina</span>
        </div>
        <div className="fc-copyright">
          <span>© 2022 Nahuel Genchi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;