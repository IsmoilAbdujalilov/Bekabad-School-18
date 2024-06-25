import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CourseImage1 } from "../assets/images/png";
import { HeroBigImage2, HeroBigImage3 } from "../assets/images/jpg";
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
      <h1 className="visually-hidden">Tadbirlar</h1>
      <BackgroundHeroImg
        url={HeroBigImage3}
        title="Bizning maktab o’quvchilari bo’sh vaqtlaridan unumli foydalanishadi"
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
        </div>
      </section>
    </section>
  );
};

export default AdditionLessons;
