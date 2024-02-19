import { SchoolNews1, SchoolNews2, SchoolNews3 } from "../assets/images/jpg";
import {
  ArrowRight,
  ArrowRightLight,
  Calendar as CalendarIcon,
} from "../assets/images/svg";

const SchoolNews = () => {
  return (
    <section className="school-news">
      <div className="container">
        <div className="school-news__top">
          <h2 className="school-news__top-heading">Yangiliklar</h2>
          <a href="#">
            <span className="school-news__top-all">Barchasi</span>
            <img src={ArrowRight} alt="arrow-right-icon" />
          </a>
        </div>
        <hr className="school-news-horizontal-rule" />
        <ul className="school-news__cards">
          <li className="school-news__card">
            <div className="school-news__content">
              <img
                src={SchoolNews1}
                className="school-news__content-img"
                alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
              />
              <h3 className="school-news__content-heading">
                Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
              </h3>
              <p className="school-news__content-text">
                The first and only school in Uzbekistan to be a member of
                FOBISIA – which promotes excellence in British-international
                education in Asia – our .....
              </p>
            </div>
            <footer className="school-news__footer">
              <div className="school-news__small-box">
                <img
                  src={CalendarIcon}
                  alt="calendar-icon"
                  className="school-news__calendar-icon"
                />
                <p>
                  <time dateTime="12.03.2023">12.03.2023</time>
                </p>
              </div>
              <div className="school-news__small-box">
                <span className="school-news__small-box-text">Batafsil</span>
                <img
                  src={ArrowRightLight}
                  alt="arrow-right-light-icon"
                  className="school-news__small-box-icon"
                />
              </div>
            </footer>
          </li>
          <li className="school-news__card">
            <div className="school-news__content">
              <img
                src={SchoolNews2}
                className="school-news__content-img"
                alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
              />
              <h3 className="school-news__content-heading">
                Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
              </h3>
              <p className="school-news__content-text">
                The first and only school in Uzbekistan to be a member of
                FOBISIA – which promotes excellence in British-international
                education in Asia – our .....
              </p>
            </div>
            <footer className="school-news__footer">
              <div className="school-news__small-box">
                <img
                  src={CalendarIcon}
                  alt="calendar-icon"
                  className="school-news__calendar-icon"
                />
                <p>
                  <time dateTime="12.03.2023">12.03.2023</time>
                </p>
              </div>
              <div className="school-news__small-box">
                <span className="school-news__small-box-text">Batafsil</span>
                <img
                  src={ArrowRightLight}
                  alt="arrow-right-light-icon"
                  className="school-news__small-box-icon"
                />
              </div>
            </footer>
          </li>
          <li className="school-news__card">
            <div className="school-news__content">
              <img
                src={SchoolNews3}
                className="school-news__content-img"
                alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
              />
              <h3 className="school-news__content-heading">
                Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
              </h3>
              <p className="school-news__content-text">
                The first and only school in Uzbekistan to be a member of
                FOBISIA – which promotes excellence in British-international
                education in Asia – our .....
              </p>
            </div>
            <footer className="school-news__footer">
              <div className="school-news__small-box">
                <img
                  src={CalendarIcon}
                  alt="calendar-icon"
                  className="school-news__calendar-icon"
                />
                <p>
                  <time dateTime="12.03.2023">12.03.2023</time>
                </p>
              </div>
              <div className="school-news__small-box">
                <span className="school-news__small-box-text">Batafsil</span>
                <img
                  src={ArrowRightLight}
                  alt="arrow-right-light-icon"
                  className="school-news__small-box-icon"
                />
              </div>
            </footer>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SchoolNews;
