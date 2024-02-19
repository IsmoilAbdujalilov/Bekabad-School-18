import Button from "./Button";
import { ArrowRight } from "../assets/images/svg";
import { SchoolTeacher } from "../assets/images/jpg";

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
          <div className="school-teachers__small-box">
            <Button className="school-teachers__small-box-btn" type="button">
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
            <Button className="school-teachers__small-box-btn" type="button">
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
        <ul className="school-teachers__list">
          <li className="school-teachers__item">
            <img
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
          <li className="school-teachers__item">
            <img
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
          <li className="school-teachers__item">
            <img
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
        </ul>
        <div className="school-teachers__all">
          <Button type="button" className="school-teachers__all-btn">
            Barchasi
            <img
              height={8}
              width={14}
              src={ArrowRight}
              alt="arrow-icon"
              className="school-teachers__all-icon"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchoolTeachers;
