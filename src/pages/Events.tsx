import { HeroBigImage3 } from "../assets/images/jpg";
import { CourseImage4 } from "../assets/images/png";
import { Calendar } from "../assets/images/svg";
import { BackgroundHeroImg, Button } from "../components";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdditionLessons = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
      <h1 className="visually-hidden">Tadbirlar</h1>
      <BackgroundHeroImg
        url={HeroBigImage3}
        title="Bizning maktab o’quvchilari bo’sh vaqtlaridan unumli foydalanishadi"
      />

      <section className="school-events">
        <div className="container">
          <ul className="school-courses-content__list">
            {buttonData.length > 0 &&
              buttonData.map((el: buttonTypes) => {
                return (
                  <li className="school-courses-content__item" key={el.id}>
                    <Button
                      type="button"
                      onClick={() => navigate(el.path)}
                      className={getClassName({
                        isActive: el.path === location.pathname,
                      })}
                    >
                      {el.title}
                    </Button>
                  </li>
                );
              })}
          </ul>

          <span className="school-courses__links">
            <Link to="/" className="school-courses__links-link">
              Bosh sahifa
            </Link>
            /
            <Link to={location.pathname} className="school-courses__links-link">
              To'garaklar
            </Link>
          </span>

          <ul className="school-events__list">
            <li className="school-events__item">
              <img
                width={406}
                height={312}
                alt="course image"
                src={CourseImage4}
                className="school-events__item-img"
              />
              <div className="school-events__box">
                <div className="school-events__content">
                  <h2 className="school-events__content-title">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h2>
                  <p className="school-events__content-description">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our pioneering academic programme is one
                    of the best in the country. From the Early Years Foundation
                    Stage through to IGCSEs and A-levels, your.....
                  </p>
                </div>
                <span className="school-events__calendar">
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#49658C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.75 18.1073V18.0299M12.25 18.1073V18.0299M12.25 13.9157V13.8383M16.25 13.9157V13.8383M4.75 9.80134H18.75M6.55952 3.88708V5.43012M16.75 3.88708V5.42993M16.75 5.42993H6.75C5.09315 5.42993 3.75 6.81145 3.75 8.51563V18.8014C3.75 20.5056 5.09315 21.8871 6.75 21.8871H16.75C18.4069 21.8871 19.75 20.5056 19.75 18.8014L19.75 8.51563C19.75 6.81145 18.4069 5.42993 16.75 5.42993Z"
                    />
                  </svg>

                  <p className="school-events__calendar-date">12.03.2023</p>
                </span>
              </div>
            </li>
            <li className="school-events__item">
              <img
                width={406}
                height={312}
                alt="course image"
                src={CourseImage4}
                className="school-events__item-img"
              />
              <div className="school-events__box">
                <div className="school-events__content">
                  <h2 className="school-events__content-title">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h2>
                  <p className="school-events__content-description">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our pioneering academic programme is one
                    of the best in the country. From the Early Years Foundation
                    Stage through to IGCSEs and A-levels, your.....
                  </p>
                </div>
                <span className="school-events__calendar">
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#49658C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.75 18.1073V18.0299M12.25 18.1073V18.0299M12.25 13.9157V13.8383M16.25 13.9157V13.8383M4.75 9.80134H18.75M6.55952 3.88708V5.43012M16.75 3.88708V5.42993M16.75 5.42993H6.75C5.09315 5.42993 3.75 6.81145 3.75 8.51563V18.8014C3.75 20.5056 5.09315 21.8871 6.75 21.8871H16.75C18.4069 21.8871 19.75 20.5056 19.75 18.8014L19.75 8.51563C19.75 6.81145 18.4069 5.42993 16.75 5.42993Z"
                    />
                  </svg>

                  <p className="school-events__calendar-date">12.03.2023</p>
                </span>
              </div>
            </li>
            <li className="school-events__item">
              <img
                width={406}
                height={312}
                alt="course image"
                src={CourseImage4}
                className="school-events__item-img"
              />
              <div className="school-events__box">
                <div className="school-events__content">
                  <h2 className="school-events__content-title">
                    Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
                  </h2>
                  <p className="school-events__content-description">
                    The first and only school in Uzbekistan to be a member of
                    FOBISIA – which promotes excellence in British-international
                    education in Asia – our pioneering academic programme is one
                    of the best in the country. From the Early Years Foundation
                    Stage through to IGCSEs and A-levels, your.....
                  </p>
                </div>
                <span className="school-events__calendar">
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="#49658C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.75 18.1073V18.0299M12.25 18.1073V18.0299M12.25 13.9157V13.8383M16.25 13.9157V13.8383M4.75 9.80134H18.75M6.55952 3.88708V5.43012M16.75 3.88708V5.42993M16.75 5.42993H6.75C5.09315 5.42993 3.75 6.81145 3.75 8.51563V18.8014C3.75 20.5056 5.09315 21.8871 6.75 21.8871H16.75C18.4069 21.8871 19.75 20.5056 19.75 18.8014L19.75 8.51563C19.75 6.81145 18.4069 5.42993 16.75 5.42993Z"
                    />
                  </svg>

                  <p className="school-events__calendar-date">12.03.2023</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default AdditionLessons;
