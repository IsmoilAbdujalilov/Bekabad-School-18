import { BeStudents, Olimpia, Students, Teachers } from "../assets/images/svg";

const SchoolNumbers = () => {
  return (
    <section className="school-numbers">
      <div className="container">
        <div className="school-numbers__titles">
          <h2 className="school-numbers__titles-heading">
            Maktabimiz raqamlarda
          </h2>
          <hr className="school-numbers__titles-horizontal-rule" />
          <ul className="school-numbers__list">
            <li className="school-numbers__item">
              <img
                width={76}
                height={76}
                src={Students}
                alt="18 - maktab o'quvchilar soni"
                className="school-numbers__item-icon"
              />
              <div className="school-numbers__item-results">
                <span className="school-numbers__item-title">
                  O’quvchilar soni
                </span>
                <h3 className="school-numbers__item-number">5000+</h3>
              </div>
            </li>
            <li className="school-numbers__item">
              <img
                width={76}
                height={76}
                src={Teachers}
                alt="18 - maktab o'qutuvchilar soni"
                className="school-numbers__item-icon"
              />
              <div className="school-numbers__item-results">
                <span className="school-numbers__item-title">
                  O’quvchilar soni
                </span>
                <h3 className="school-numbers__item-number">800+</h3>
              </div>
            </li>
            <li className="school-numbers__item">
              <img
                width={76}
                height={76}
                src={Olimpia}
                alt="18 - maktab olimpia g'oliblari"
                className="school-numbers__item-icon"
              />
              <div className="school-numbers__item-results">
                <span className="school-numbers__item-title">
                  Olimpia g'oliblari
                </span>
                <h3 className="school-numbers__item-number">120+</h3>
              </div>
            </li>
            <li className="school-numbers__item">
              <img
                width={76}
                height={76}
                src={BeStudents}
                alt="18 - maktab talaba bo'lganlar"
                className="school-numbers__item-icon"
              />
              <div className="school-numbers__item-results">
                <span className="school-numbers__item-title">
                  Talaba bo'lganlar
                </span>
                <h3 className="school-numbers__item-number">70+</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SchoolNumbers;
