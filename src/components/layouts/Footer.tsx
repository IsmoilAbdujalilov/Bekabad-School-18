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
          <a href="#">
            <img
              src={FooterLogo}
              height={88}
              width={101}
              alt="18 - Maktab Logo"
              title="18 - Maktab Logo"
              className="footer-navigation-logo"
            />
          </a>
          <ul className="footer-navigation__list">
            <li className="footer-navigation__item">
              <a className="footer-navigation__item-link" href="#">
                Maktab haqida
              </a>
            </li>
            <li className="footer-navigation__item">
              <a className="footer-navigation__item-link" href="#">
                Bizning kutubxona
              </a>
            </li>
            <li className="footer-navigation__item">
              <a className="footer-navigation__item-link" href="#">
                O’qituvchilar
              </a>
            </li>
            <li className="footer-navigation__item">
              <a className="footer-navigation__item-link" href="#">
                Yangiliklar
              </a>
            </li>
            <li className="footer-navigation__item">
              <a className="footer-navigation__item-link" href="#">
                Kurslar
              </a>
            </li>
          </ul>
          <ul className="footer-medias">
            <li className="footer-medias__item">
              <a href="#">
                <img
                  width={24}
                  height={24}
                  src={Instagram}
                  alt="18 - maktab instagram"
                  className="footer-medias__item-img"
                />
              </a>
            </li>
            <li className="footer-medias__item">
              <a href="#">
                <img
                  width={24}
                  height={24}
                  src={Facebook}
                  alt="18 - maktab facebook"
                  className="footer-medias__item-img"
                />
              </a>
            </li>
            <li className="footer-medias__item">
              <a href="#">
                <img
                  width={24}
                  height={24}
                  src={Telegram}
                  alt="18 - maktab telegram"
                  className="footer-medias__item-img"
                />
              </a>
            </li>
          </ul>
          <hr className="footer-horizontal-rule" />
          <ul className="footer-contact">
            <li className="footer-contact__item">
              <a href="tel:+998 95 412 00 05">
                <span className="footer-contact__block">
                  <img
                    width={32}
                    height={32}
                    src={Phone}
                    className="footer-contact__item-icon"
                    alt="18 - maktab phone-number"
                  />
                  <span className="footer-contact__item-text">
                    +998 95 412 00 05
                  </span>
                </span>
              </a>
            </li>
            <li className="footer-contact__item">
              <a
                target="_blank"
                href="https://www.google.com/maps?cid=4244655225150770821"
              >
                <span className="footer-contact__block">
                  <img
                    width={32}
                    height={32}
                    src={Location}
                    className="footer-contact__item-icon"
                    alt="18 - Maktab location address"
                  />
                  <span className="footer-contact__item-text">
                    Toshkent viloyati, Bekabod shahar, 18 - Maktab
                  </span>
                </span>
              </a>
            </li>
            <li className="footer-contact__item">
              <a target="_blank" href="mailto:ismoilbek20050421@gmail.com">
                <span className="footer-contact__block">
                  <img
                    width={32}
                    height={32}
                    src={Mail}
                    className="footer-contact__item-icon"
                    alt="18 - Maktab Email"
                  />
                  <span className="footer-contact__item-text">
                    ismoilbek20050421@gmail.com
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__container container">
          <span className="footer-bottom-text">
            18-maktab &copy; {new Date().getFullYear()} Barcha huquqlar
            himoyalangan
          </span>
          <a
            title="Coders Uz"
            href="https://t.me/CODERS_UZZ"
            className="footer-bottom__link"
          >
            <span className="footer-bottom__link-text">
              Sayt ishlab chiquvchisi
            </span>
            <img
              width={50}
              height={50}
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
