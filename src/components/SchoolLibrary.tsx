import Button from "./Button";
import { ArrowRight } from "../assets/images/svg";
import {
  SchoolLibraryImg1,
  SchoolLibraryImg2,
  SchoolLibraryImg3,
  SchoolLibraryImg4,
} from "../assets/images/jpg";

const SchoolLibrary = () => {
  return (
    <section className="school-library">
      <div className="container">
        <div className="school-library__top">
          <div className="school-library__small-box">
            <h2 className="school-library__small-box-heading">Kutubxona</h2>
            <hr className="school-library__small-box-horizontal-rule" />
          </div>
          <div className="school-library__small-box">
            <Button className="school-library__small-box-btn" type="button">
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
            <Button className="school-library__small-box-btn" type="button">
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

        <ul className="school-library__list">
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
        </ul>
        <div className="school-library__small-box">
          <Button type="button" className="school-library__small-box-btn">
            Barchasi
            <img src={ArrowRight} alt="arrow-icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchoolLibrary;
