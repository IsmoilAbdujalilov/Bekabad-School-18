import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CourseImage1 } from "../assets/images/png";
import { HeroBigImage2 } from "../assets/images/jpg";
import { BackgroundHeroImg, Button } from "../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CourseImage2, CourseImage3 } from "../assets/images/png/courses";

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

  // Example of using this function type
  const getClassName: ItemClassNameFunction = ({ isActive }: any) => {
    console.log(isActive);

    if (isActive) {
      return "school-courses-content__item-button school-courses-content__item-button--active";
    } else {
      return "school-courses-content__item-button";
    }
  };

  return (
    <section className="school-courses">
      <h1 className="visually-hidden">Kurslar</h1>
      <BackgroundHeroImg
        url={HeroBigImage2}
        title="Bizda to’garaklar doim faol o’quvchilar bilan gavjum"
      />

      <section className="school-courses-content">
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

          <div className="school-courses__buttons">
            <Button
              type="button"
              className="school-active-work__btn school-active-work__btn--prev"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.3338 5L20.0005 12M20.0005 12L13.3338 19M20.0005 12L4.00049 12"
                />
              </svg>
            </Button>
            <Button
              type="button"
              className="school-active-work__btn school-active-work__btn--next"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.3338 5L20.0005 12M20.0005 12L13.3338 19M20.0005 12L4.00049 12"
                />
              </svg>
            </Button>
          </div>

          <Swiper
            navigation={{
              prevEl: ".school-active-work__btn--prev",
              nextEl: ".school-active-work__btn--next",
            }}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
            }}
            className="school-courses__cards"
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },

              700: {
                slidesPerView: 2,
              },
              350: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className="school-courses__card">
              <img
                alt="rasm"
                width="100%"
                height={355}
                src={CourseImage1}
                className="school-courses__card-image"
              />

              <div className="school-courses__texts">
                <h2 className="school-courses__texts-title">
                  Ingliz tili to'garagi
                </h2>
                <p className="school-courses__texts-paragraph">
                  The first and only school in Uzbekistan to be a member of
                  FOBISIA – which promotes excellence in British-
                </p>
              </div>

              <ul className="school-courses__times">
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">O'qituvchi</h3>
                  <h3 className="school-courses__time-value">
                    Hanifa Hoshimova
                  </h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Vaqti:</h3>
                  <h3 className="school-courses__time-value">9:00-11:00</h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Tel:</h3>
                  <h3 className="school-courses__time-value">+998 998976554</h3>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="school-courses__card">
              <img
                alt="rasm"
                width="100%"
                height={355}
                src={CourseImage2}
                className="school-courses__card-image"
              />

              <div className="school-courses__texts">
                <h2 className="school-courses__texts-title">
                  Kompyuter to'garagi
                </h2>
                <p className="school-courses__texts-paragraph">
                  The first and only school in Uzbekistan to be a member of
                  FOBISIA – which promotes excellence in British-
                </p>
              </div>

              <ul className="school-courses__times">
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">O'qituvchi</h3>
                  <h3 className="school-courses__time-value">
                    Hanifa Hoshimova
                  </h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Vaqti:</h3>
                  <h3 className="school-courses__time-value">9:00-11:00</h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Tel:</h3>
                  <h3 className="school-courses__time-value">+998 998976554</h3>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="school-courses__card">
              <img
                alt="rasm"
                width="100%"
                height={355}
                src={CourseImage3}
                className="school-courses__card-image"
              />

              <div className="school-courses__texts">
                <h2 className="school-courses__texts-title">Kimyo to'garagi</h2>
                <p className="school-courses__texts-paragraph">
                  The first and only school in Uzbekistan to be a member of
                  FOBISIA – which promotes excellence in British-The first and
                  only school in Uzbekistan to be a member of FOBISIA – which
                  promotes excellence in British
                </p>
              </div>

              <ul className="school-courses__times">
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">O'qituvchi</h3>
                  <h3 className="school-courses__time-value">
                    Hanifa Hoshimova
                  </h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Vaqti:</h3>
                  <h3 className="school-courses__time-value">9:00-11:00</h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Tel:</h3>
                  <h3 className="school-courses__time-value">+998 998976554</h3>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="school-courses__card">
              <img
                alt="rasm"
                width="100%"
                height={355}
                src={CourseImage3}
                className="school-courses__card-image"
              />

              <div className="school-courses__texts">
                <h2 className="school-courses__texts-title">Kimyo to'garagi</h2>
                <p className="school-courses__texts-paragraph">
                  The first and only school in Uzbekistan to be a member of
                  FOBISIA – which promotes excellence in British-The first and
                  only school in Uzbekistan to be a member of FOBISIA – which
                  promotes excellence in British
                </p>
              </div>

              <ul className="school-courses__times">
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">O'qituvchi</h3>
                  <h3 className="school-courses__time-value">
                    Hanifa Hoshimova
                  </h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Vaqti:</h3>
                  <h3 className="school-courses__time-value">9:00-11:00</h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Tel:</h3>
                  <h3 className="school-courses__time-value">+998 998976554</h3>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="school-courses__card">
              <img
                alt="rasm"
                width="100%"
                height={355}
                src={CourseImage3}
                className="school-courses__card-image"
              />

              <div className="school-courses__texts">
                <h2 className="school-courses__texts-title">Kimyo to'garagi</h2>
                <p className="school-courses__texts-paragraph">
                  The first and only school in Uzbekistan to be a member of
                  FOBISIA – which promotes excellence in British-The first and
                  only school in Uzbekistan to be a member of FOBISIA – which
                  promotes excellence in British
                </p>
              </div>

              <ul className="school-courses__times">
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">O'qituvchi</h3>
                  <h3 className="school-courses__time-value">
                    Hanifa Hoshimova
                  </h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Vaqti:</h3>
                  <h3 className="school-courses__time-value">9:00-11:00</h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Tel:</h3>
                  <h3 className="school-courses__time-value">+998 998976554</h3>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="school-courses__card">
              <img
                alt="rasm"
                width="100%"
                height={355}
                src={CourseImage3}
                className="school-courses__card-image"
              />

              <div className="school-courses__texts">
                <h2 className="school-courses__texts-title">Kimyo to'garagi</h2>
                <p className="school-courses__texts-paragraph">
                  The first and only school in Uzbekistan to be a member of
                  FOBISIA – which promotes excellence in British-The first and
                  only school in Uzbekistan to be a member of FOBISIA – which
                  promotes excellence in British
                </p>
              </div>

              <ul className="school-courses__times">
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">O'qituvchi</h3>
                  <h3 className="school-courses__time-value">
                    Hanifa Hoshimova
                  </h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Vaqti:</h3>
                  <h3 className="school-courses__time-value">9:00-11:00</h3>
                </li>
                <li className="school-courses__time">
                  <h3 className="school-courses__time-key">Tel:</h3>
                  <h3 className="school-courses__time-value">+998 998976554</h3>
                </li>
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default AdditionLessons;
