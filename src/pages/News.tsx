import ReactPaginate from "react-paginate";
import {
  HeroBigImage5,
  SchoolNews1,
  SchoolNews2,
  SchoolNews3,
} from "../assets/images/jpg";
import { CourseImage4 } from "../assets/images/png";
import { ArrowRightLight, Calendar } from "../assets/images/svg";
import { BackgroundHeroImg } from "../components";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdditionLessons = () => {
  const location = useLocation();

  type buttonTypes = {
    path: string;
    title: string;
    id: number | string;
  };

  const buttonData: buttonTypes[] = [
    {
      id: 1,
      title: "Tadbirlar",
      path: "/pages/events",
    },
    {
      id: 2,
      title: "Kurslar",
      path: "/pages/courses",
    },
    {
      id: 3,
      title: "To'garaklar",
      path: "/pages/additional-lessons",
    },
  ];

  type ItemClassNameFunction = ({
    isActive,
  }: {
    isActive: any;
  }) =>
    | "school-courses-content__item-button school-courses-content__item-button--active"
    | "school-courses-content__item-button";

  const getClassName: ItemClassNameFunction = ({ isActive }: any) => {
    if (isActive) {
      return "school-courses-content__item-button school-courses-content__item-button--active";
    } else {
      return "school-courses-content__item-button";
    }
  };

  return (
    <section className="school-courses">
      <h1 className="visually-hidden">Yangiliklar</h1>
      <BackgroundHeroImg
        url={HeroBigImage5}
        title="Biz doim harakatdamiz, izlanishlardan charchamaymiz"
      />

      <section className="school-events">
        <div className="container">
          <span className="school-courses__links">
            <Link to="/" className="school-courses__links-link">
              Bosh sahifa
            </Link>
            /
            <Link to={location.pathname} className="school-courses__links-link">
              Yangiliklar
            </Link>
          </span>

          <ul className="school-news__cards school-news-page">
            <li className="school-news__card">
              <div className="school-news__container">
                <img
                  width={353}
                  height={319}
                  src={SchoolNews1}
                  className="school-news__content-img"
                  alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
                />
                <div className="school-news__content">
                  <h3 className="school-news__content-heading">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h3>
                  <p className="school-news__content-text">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our .....
                  </p>
                </div>
              </div>
              <footer className="school-news__footer">
                <div className="school-news__container school-news__flex">
                  <div className="school-news__calendar">
                    <img
                      width={24}
                      height={24}
                      src={Calendar}
                      alt="calendar-icon"
                      className="school-news__calendar-icon"
                    />
                    <p className="school-news__calendar-date">
                      <time dateTime="12.03.2023">12.03.2023</time>
                    </p>
                  </div>
                  <a href="#">
                    <div className="school-news__calendar">
                      <span className="school-news__calendar-text">
                        Batafsil
                      </span>
                      <img
                        width={24}
                        height={24}
                        src={ArrowRightLight}
                        alt="arrow-right-light-icon"
                        className="school-news__calendar-icon"
                      />
                    </div>
                  </a>
                </div>
              </footer>
            </li>
            <li className="school-news__card">
              <div className="school-news__container">
                <img
                  width={353}
                  height={319}
                  src={SchoolNews2}
                  className="school-news__content-img"
                  alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
                />
                <div className="school-news__content">
                  <h3 className="school-news__content-heading">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h3>
                  <p className="school-news__content-text">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our .....
                  </p>
                </div>
              </div>

              <footer className="school-news__footer">
                <div className="school-news__container school-news__flex">
                  <div className="school-news__calendar">
                    <img
                      src={Calendar}
                      alt="calendar-icon"
                      className="school-news__calendar-icon"
                    />
                    <p className="school-news__calendar-date">
                      <time dateTime="12.03.2023">12.03.2023</time>
                    </p>
                  </div>
                  <a href="#">
                    <div className="school-news__calendar">
                      <span className="school-news__calendar-text">
                        Batafsil
                      </span>
                      <img
                        width={24}
                        height={24}
                        src={ArrowRightLight}
                        alt="arrow-right-light-icon"
                        className="school-news__calendar-icon"
                      />
                    </div>
                  </a>
                </div>
              </footer>
            </li>
            <li className="school-news__card">
              <div className="school-news__container">
                <img
                  src={SchoolNews3}
                  className="school-news__content-img"
                  alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
                />
                <div className="school-news__content">
                  <h3 className="school-news__content-heading">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h3>
                  <p className="school-news__content-text">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our .....
                  </p>
                </div>
              </div>

              <footer className="school-news__footer">
                <div className="school-news__container school-news__flex">
                  <div className="school-news__calendar">
                    <img
                      src={Calendar}
                      alt="calendar-icon"
                      className="school-news__calendar-icon"
                    />
                    <p className="school-news__calendar-date">
                      <time dateTime="12.03.2023">12.03.2023</time>
                    </p>
                  </div>
                  <a href="#">
                    <div className="school-news__calendar">
                      <span className="school-news__calendar-text">
                        Batafsil
                      </span>
                      <img
                        width={24}
                        height={24}
                        src={ArrowRightLight}
                        alt="arrow-right-light-icon"
                        className="school-news__calendar-icon"
                      />
                    </div>
                  </a>
                </div>
              </footer>
            </li>
            <li className="school-news__card">
              <div className="school-news__container">
                <img
                  src={SchoolNews3}
                  className="school-news__content-img"
                  alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
                />
                <div className="school-news__content">
                  <h3 className="school-news__content-heading">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h3>
                  <p className="school-news__content-text">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our .....
                  </p>
                </div>
              </div>

              <footer className="school-news__footer">
                <div className="school-news__container school-news__flex">
                  <div className="school-news__calendar">
                    <img
                      src={Calendar}
                      alt="calendar-icon"
                      className="school-news__calendar-icon"
                    />
                    <p className="school-news__calendar-date">
                      <time dateTime="12.03.2023">12.03.2023</time>
                    </p>
                  </div>
                  <a href="#">
                    <div className="school-news__calendar">
                      <span className="school-news__calendar-text">
                        Batafsil
                      </span>
                      <img
                        width={24}
                        height={24}
                        src={ArrowRightLight}
                        alt="arrow-right-light-icon"
                        className="school-news__calendar-icon"
                      />
                    </div>
                  </a>
                </div>
              </footer>
            </li>
            <li className="school-news__card">
              <div className="school-news__container">
                <img
                  src={SchoolNews3}
                  className="school-news__content-img"
                  alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
                />
                <div className="school-news__content">
                  <h3 className="school-news__content-heading">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h3>
                  <p className="school-news__content-text">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our .....
                  </p>
                </div>
              </div>

              <footer className="school-news__footer">
                <div className="school-news__container school-news__flex">
                  <div className="school-news__calendar">
                    <img
                      src={Calendar}
                      alt="calendar-icon"
                      className="school-news__calendar-icon"
                    />
                    <p className="school-news__calendar-date">
                      <time dateTime="12.03.2023">12.03.2023</time>
                    </p>
                  </div>
                  <a href="#">
                    <div className="school-news__calendar">
                      <span className="school-news__calendar-text">
                        Batafsil
                      </span>
                      <img
                        width={24}
                        height={24}
                        src={ArrowRightLight}
                        alt="arrow-right-light-icon"
                        className="school-news__calendar-icon"
                      />
                    </div>
                  </a>
                </div>
              </footer>
            </li>
            <li className="school-news__card">
              <div className="school-news__container">
                <img
                  src={SchoolNews3}
                  className="school-news__content-img"
                  alt="Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi "
                />
                <div className="school-news__content">
                  <h3 className="school-news__content-heading">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h3>
                  <p className="school-news__content-text">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our .....
                  </p>
                </div>
              </div>

              <footer className="school-news__footer">
                <div className="school-news__container school-news__flex">
                  <div className="school-news__calendar">
                    <img
                      src={Calendar}
                      alt="calendar-icon"
                      className="school-news__calendar-icon"
                    />
                    <p className="school-news__calendar-date">
                      <time dateTime="12.03.2023">12.03.2023</time>
                    </p>
                  </div>
                  <a href="#">
                    <div className="school-news__calendar">
                      <span className="school-news__calendar-text">
                        Batafsil
                      </span>
                      <img
                        width={24}
                        height={24}
                        src={ArrowRightLight}
                        alt="arrow-right-light-icon"
                        className="school-news__calendar-icon"
                      />
                    </div>
                  </a>
                </div>
              </footer>
            </li>
          </ul>

          <ReactPaginate
            nextLabel={">"}
            previousLabel={"<"}
            nextLinkClassName="school-library-page-pagination-link"
            pageLinkClassName="school-library-page-pagination-link"
            previousLinkClassName="school-library-page-pagination-link"
            pageCount={10} // Umumiy sahifalar soni
            marginPagesDisplayed={2} // Oyina orqali chiqadigan tugmachalar soni
            pageRangeDisplayed={1} // Ekrandagi sahifalar soni
            containerClassName={"school-library-page-pagination"}
            activeClassName={"school-library-page-pagination-active"}
          />
        </div>
      </section>
    </section>
  );
};

export default AdditionLessons;
