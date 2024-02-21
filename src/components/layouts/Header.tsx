import { HeaderLogo } from "../../assets/images/svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#">
            <div className="nav__link">
              <img
                width={100}
                src={HeaderLogo}
                alt="header-logo"
                className="nav-intro"
                title="18-maktab logo"
              />
              <p className="nav-school-city">Bekabod shahar</p>
              <p className="nav-school-name">18 - Maktab</p>
            </div>
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                Maktab haqida
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                Bizning kutubxona
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                O'qituvchilar
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                Yangiliklar
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item-link" href="#">
                Kurslar
              </a>
            </li>
          </ul>
          <a className="nav-reception" href="#" role="button">
            Qabulxona
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
