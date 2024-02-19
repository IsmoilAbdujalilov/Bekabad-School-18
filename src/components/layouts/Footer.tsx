import { SiteDeveloper } from "../../assets/images/jpg";
import {
  Phone,
  Facebook,
  Telegram,
  Location,
  Instagram,
  FooterLogo,
  Mail,
} from "../../assets/images/svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-navigation">
          <img
            src={FooterLogo}
            alt="18 - Maktab Logo"
            title="18 - Maktab Logo"
            className="footer-navigation-logo"
          />
          <ul className="footer-navigation__list">
            <li className="footer__item">
              <a className="footer__item-link" href="#">
                Maktab haqida
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__item-link" href="#">
                Bizning kutubxona
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__item-link" href="#">
                O’qituvchilar
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__item-link" href="#">
                Yangiliklar
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__item-link" href="#">
                Kurslar
              </a>
            </li>
          </ul>
          <ul className="footer-medias">
            <li className="footer-medias__item">
              <a href="#">
                <img
                  src={Instagram}
                  alt="18 - maktab instagram"
                  className="footer-medias__item-img"
                />
              </a>
            </li>
            <li className="footer-medias__item">
              <a href="#">
                <img
                  src={Facebook}
                  alt="18 - maktab facebook"
                  className="footer-medias__item-img"
                />
              </a>
            </li>
            <li className="footer-medias__item">
              <a href="#">
                <img
                  src={Telegram}
                  alt="18 - maktab telegram"
                  className="footer-medias__item-img"
                />
              </a>
            </li>
          </ul>
          <hr className="nav-horizontal-rule" />
          <ul className="footer-contact">
            <li className="footer-contact__item">
              <a href="tel:+998 95 412 00 05">
                <img
                  src={Phone}
                  className="footer-contact__item-icon"
                  alt="18 - maktab phone-number"
                />
                <span className="footer-contact__item-text">
                  +998 95 412 00 05
                </span>
              </a>
            </li>
            <li className="footer-contact__item">
              <a
                target="_blank"
                href="https://www.google.com/maps?cid=4244655225150770821"
              >
                <img
                  src={Location}
                  className="footer-contact__item-icon"
                  alt="18 - Maktab location address"
                />
                <span className="footer-contact__item-text">
                  Toshkent viloyati, Bekabod shahar, 18 - Maktab
                </span>
              </a>
            </li>
            <li className="footer-contact__item">
              <a target="_blank" href="mailto:ismoilbek20050421@gmail.com">
                <img
                  src={Mail}
                  className="footer-contact__item-icon"
                  alt="18 - Maktab Email"
                />
                ismoilbek20050421@gmail.com
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer-bottom">
          <span className="footer-bottom-text">
            18-maktab &copy; {new Date().getFullYear()} Barcha huquqlar
            himoyalangan
          </span>
          <a className="footer-bottom__link" href="https://t.me/CODERS_UZZ">
            <span className="footer-bottom__link-text">
              Sayt ishlab chiquvchisi
            </span>
            <img
              alt="Coders Uz"
              src={SiteDeveloper}
              className="footer-bottom__link-img"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
