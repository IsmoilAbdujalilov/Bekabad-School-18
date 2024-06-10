import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { SchoolTeacher } from "../assets/images/jpg";
import { Navigation, Autoplay } from "swiper/modules";

const SchoolTeachers = () => {
  return (
    <section className="school-teachers">
      <div className="container">
        <div className="school-teachers__top">
          <div className="school-teachers__small-box">
            <h2 className="school-teachers__small-box-heading">
              O'qituvchilar
            </h2>
            <hr className="school-teachers__small-box-horizontal-rule" />
          </div>
          <div className="school-teachers__buttons">
            <Button
              type="button"
              className="school-teachers__buttons-btn school-teachers__buttons-btn--left"
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
              className="school-teachers__buttons-btn school-teachers__buttons-btn--right"
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
        </div>
        <Swiper
          navigation={{
            prevEl: ".school-teachers__buttons-btn--left",
            nextEl: ".school-teachers__buttons-btn--right",
          }}
          autoplay={{
            delay: 2500,
          }}
          spaceBetween={20}
          slidesPerView={3}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            578: {
              slidesPerView: 2,
            },
            350: {
              slidesPerView: 1,
            },
          }}
          className="school-teachers__list"
        >
          <SwiperSlide>
            <li className="school-teachers__item">
              <img
                width={413}
                height={575}
                src={SchoolTeacher}
                alt="school-teacher"
                title="school-teacher"
                className="school-teachers__item-img"
              />
              <div className="school-teachers__content">
                <h3 className="school-teachers__content-heading">
                  Abdullayeva Rano Sharopovna
                </h3>
                <span className="school-teachers__content-job-name">
                  Direktor
                </span>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="school-teachers__item">
              <img
                width={413}
                height={575}
                src={SchoolTeacher}
                alt="school-teacher"
                title="school-teacher"
                className="school-teachers__item-img"
              />
              <div className="school-teachers__content">
                <h3 className="school-teachers__content-heading">
                  Abdullayeva Rano Sharopovna
                </h3>
                <span className="school-teachers__content-job-name">
                  Direktor
                </span>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="school-teachers__item">
              <img
                width={413}
                height={575}
                src={SchoolTeacher}
                alt="school-teacher"
                title="school-teacher"
                className="school-teachers__item-img"
              />
              <div className="school-teachers__content">
                <h3 className="school-teachers__content-heading">
                  Abdullayeva Rano Sharopovna
                </h3>
                <span className="school-teachers__content-job-name">
                  Direktor
                </span>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="school-teachers__item">
              <img
                width={413}
                height={575}
                src={SchoolTeacher}
                alt="school-teacher"
                title="school-teacher"
                className="school-teachers__item-img"
              />
              <div className="school-teachers__content">
                <h3 className="school-teachers__content-heading">
                  Abdullayeva Rano Sharopovna
                </h3>
                <span className="school-teachers__content-job-name">
                  Direktor
                </span>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="school-teachers__item">
              <img
                width={413}
                height={575}
                src={SchoolTeacher}
                alt="school-teacher"
                title="school-teacher"
                className="school-teachers__item-img"
              />
              <div className="school-teachers__content">
                <h3 className="school-teachers__content-heading">
                  Abdullayeva Rano Sharopovna
                </h3>
                <span className="school-teachers__content-job-name">
                  Direktor
                </span>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
        <div className="school-teachers__all">
          <Button type="button" className="school-teachers__all-btn">
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

export default SchoolTeachers;
