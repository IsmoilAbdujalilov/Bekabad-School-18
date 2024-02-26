import Button from "./Button";
import { Navigation } from "swiper/modules";
import { SliderImg } from "../assets/images/jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
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
          <Swiper
            navigation={{
              nextEl: ".school-active-work__btn--next",
              prevEl: ".school-active-work__btn--prev",
            }}
            modules={[Navigation]}
            className="school-active-work__list"
          >
            <SwiperSlide className="school-active-work__item">
              <img
                src={SliderImg}
                alt="slider-img"
                title="18 - Maktab yangiliklari"
                className="school-active-work__item-img"
              />
            </SwiperSlide>
            <SwiperSlide className="school-active-work__item">
              <img
                src={SliderImg}
                alt="slider-img"
                title="18 - Maktab yangiliklari"
                className="school-active-work__item-img"
              />
            </SwiperSlide>
            <SwiperSlide className="school-active-work__item">
              <img
                src={SliderImg}
                alt="slider-img"
                title="18 - Maktab yangiliklari"
                className="school-active-work__item-img"
              />
            </SwiperSlide>
            <SwiperSlide className="school-active-work__item">
              <img
                src={SliderImg}
                alt="slider-img"
                title="18 - Maktab yangiliklari"
                className="school-active-work__item-img"
              />
            </SwiperSlide>
            <div className="school-active-work__buttons">
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
          </Swiper>
        </div>
        <footer className="school-active-work__footer">
          <ul className="school-active-work__list">
            <li className="school-active-work__block">
              <span className="school-active-work__bg">
                <img
                  width={42}
                  height={42}
                  src={SchoolWorkFooterIcon1}
                  alt="school-work-footer-icon"
                  className="school-active-work__bg-icon"
                />
              </span>
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
            <li className="school-active-work__block">
              <span className="school-active-work__bg">
                <img
                  width={42}
                  height={42}
                  src={SchoolWorkFooterIcon2}
                  alt="school-work-footer-icon"
                  className="school-active-work__bg-icon"
                />
              </span>
              <div className="school-active-work__content">
                <h3 className="school-active-work__content-heading">Kurslar</h3>
                <p className="school-active-work__content-text">
                  Kurslarimiz orqali o’quvchilar bilimlarni yanada oshirishadi
                </p>
              </div>
            </li>
            <li className="school-active-work__block">
              <span className="school-active-work__bg">
                <img
                  width={42}
                  height={42}
                  src={SchoolWorkFooterIcon3}
                  alt="school-work-footer-icon"
                  className="school-active-work__bg-icon"
                />
              </span>
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
          <Button type="button" className="school-active-work__bottom-btn">
            Barchasi
            <svg
              width="16"
              height="10"
              fill="none"
              viewBox="0 0 16 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 5H15H1Z" fill="#ffffff" />
              <path d="M11 9L15 5L11 9Z" fill="#ffffff" />
              <path d="M11 1L15 5L11 1Z" fill="#ffffff" />
              <path
                stroke-width="2"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M1 5H15M15 5L11 9M15 5L11 1"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchoolActiveWork;
