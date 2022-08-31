import { LinkIcon } from "../index";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-container">
        <div className="fc-links">
          <LinkIcon icon="logo-github" link="https://github.com/NahuelGenchi" />
          <LinkIcon icon="logo-linkedin" link="https://www.linkedin.com/in/nahuel-genchi" />
          <LinkIcon icon="mail" link="mailto:nahuelgenchi@gmail.com" />
        </div>
        <div className="fc-info">
          <div className="fc-location">
            <ion-icon name="location"></ion-icon>
            <span>Argentina</span>
          </div>
          <div className="fc-copyright">
            <span>© 2022 Nahuel Genchi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;