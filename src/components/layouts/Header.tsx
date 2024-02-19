import { HeaderLogo } from "../../assets/images/svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#">
            <img
              src={HeaderLogo}
              alt="header-logo"
              className="nav-intro"
              title="18-maktab logo"
            />
            <span className="nav-school-city">Bekabod shahar</span>
            <span className="nav-school-name">18 - Maktab</span>
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
        </nav>
        <a className="nav-reception" href="#" role="button">
          Qabulxona
        </a>
      </div>
    </header>
  );
};

export default Header;
