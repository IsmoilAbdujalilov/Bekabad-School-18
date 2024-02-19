import Button from "./Button";
import { SliderImg } from "../assets/images/jpg";
import {
  ArrowRight,
  SchoolWorkFooterIcon1,
  SchoolWorkFooterIcon2,
  SchoolWorkFooterIcon3,
} from "../assets/images/svg";

const SchoolActiveWork = () => {
  return (
    <section className="school-active-work">
      <div className="container">
        <div className="school-active-work__top">
          <h2 className="school-active-work__top-heading">
            Faol tashkiliy ishlar
          </h2>
          <hr className="school-active-work__top-horizontal-rule" />
        </div>
        <div className="school-active-work__slider">
          <ul className="school-active-work__list">
            <li className="school-active-work__item">
              <img
                src={SliderImg}
                alt="slider-img"
                title="18 - Maktab yangiliklari"
                className="school-active-work__item-imgs"
              />
            </li>
          </ul>
          <div className="school-active-work__buttons">
            <Button type="button" className="school-active-work__btn">
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
            <Button type="button" className="school-active-work__btn">
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
        </div>
        <footer className="school-active-work__footer">
          <ul className="school-active-work__list">
            <li className="school-active-work__item">
              <div className="school-active-work__bg">
                <img
                  src={SchoolWorkFooterIcon1}
                  alt="school-work-footer-icon"
                  className="school-active-work__bg-icon"
                />
              </div>
              <div className="school-active-work__content">
                <h3 className="school-active-work__content-heading">
                  Tadbirlar
                </h3>
                <p className="school-active-work__content-text">
                  Bizning maktab o’quvchilari bo’sh vaqtlaridan unumli
                  foydalanishadi
                </p>
              </div>
            </li>
            <li className="school-active-work__item">
              <div className="school-active-work__bg">
                <img
                  src={SchoolWorkFooterIcon2}
                  alt="school-work-footer-icon"
                  className="school-active-work__bg-icon"
                />
              </div>
              <div className="school-active-work__content">
                <h3 className="school-active-work__content-heading">Kurslar</h3>
                <p className="school-active-work__content-text">
                  Kurslarimiz orqali o’quvchilar bilimlarni yanada oshirishadi
                </p>
              </div>
            </li>
            <li className="school-active-work__item">
              <div className="school-active-work__bg">
                <img
                  src={SchoolWorkFooterIcon3}
                  alt="school-work-footer-icon"
                  className="school-active-work__bg-icon"
                />
              </div>
              <div className="school-active-work__content">
                <h3 className="school-active-work__content-heading">
                  To’garaklar
                </h3>
                <p className="school-active-work__content-text">
                  Bizda to’garaklar doim faol o’quvchilar bilan gavjum
                </p>
              </div>
            </li>
          </ul>
        </footer>
        <div className="school-active-work__bottom">
          <Button type="button" className="school-active-work__button-btn">
            Barchasi
            <img
              src={ArrowRight}
              alt="arrow-icon"
              className="school-active-work__bottom-icon"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchoolActiveWork;
