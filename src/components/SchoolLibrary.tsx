import Button from "./Button";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SchoolLibraryImg1,
  SchoolLibraryImg2,
  SchoolLibraryImg3,
  SchoolLibraryImg4,
} from "../assets/images/jpg";

const SchoolLibrary = () => {
  const navigate = useNavigate();

  return (
    <section className="school-library" id="school-library">
      <div className="container">
        <div className="school-library__top">
          <div className="school-library__small-box">
            <h2 className="school-library__small-box-heading">Kutubxona</h2>
            <hr className="school-library__small-box-horizontal-rule" />
          </div>
          <div className="school-library__buttons">
            <Button
              type="button"
              className="school-library__buttons-btn school-library__buttons-btn--left"
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
              className="school-library__buttons-btn school-library__buttons-btn--right"
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
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
          }}
          className="school-library__list"
          navigation={{
            prevEl: ".school-library__buttons-btn--left",
            nextEl: ".school-library__buttons-btn--right",
          }}
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
        >
          <SwiperSlide>
            <li className="school-library__item">
              <img
                width={305}
                height={441}
                alt="the-railway book"
                src={SchoolLibraryImg1}
                title="the-railway book"
                className="school-library__item-img"
              />
            </li>
          </SwiperSlide>

          <SwiperSlide>
            <li className="school-library__item">
              <img
                width={305}
                height={441}
                alt="Making Uzbekistan"
                src={SchoolLibraryImg2}
                title="Making Uzbekistan"
                className="school-library__item-img"
              />
            </li>
          </SwiperSlide>

          <SwiperSlide>
            <li className="school-library__item">
              <img
                width={305}
                height={441}
                src={SchoolLibraryImg3}
                alt="Am I small ? Men kichikmanmi ?"
                className="school-library__item-img"
                title="Am I small ? Men kichikmanmi ?"
              />
            </li>
          </SwiperSlide>

          <SwiperSlide>
            <li className="school-library__item">
              <img
                width={305}
                height={441}
                src={SchoolLibraryImg4}
                alt="Alisher Navoiy Xamsa"
                title="Alisher Navoiy Xamsa"
                className="school-library__item-img"
              />
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="school-library__item">
              <img
                width={305}
                height={441}
                src={SchoolLibraryImg4}
                alt="Alisher Navoiy Xamsa"
                title="Alisher Navoiy Xamsa"
                className="school-library__item-img"
              />
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="school-library__item">
              <img
                width={305}
                height={441}
                src={SchoolLibraryImg4}
                alt="Alisher Navoiy Xamsa"
                title="Alisher Navoiy Xamsa"
                className="school-library__item-img"
              />
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className="school-library__item">
              <img
                width={305}
                height={441}
                src={SchoolLibraryImg4}
                alt="Alisher Navoiy Xamsa"
                title="Alisher Navoiy Xamsa"
                className="school-library__item-img"
              />
            </li>
          </SwiperSlide>
        </Swiper>
        <div className="school-library__bottom">
          <Button
            type="button"
            className="school-library__bottom-btn"
            onClick={() => navigate("/pages/library")}
          >
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

export default SchoolLibrary;
