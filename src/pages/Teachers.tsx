import React from 'react';
import { BackgroundHeroImg } from "../components";
import { HeroBigImage6 } from "../assets/images/jpg/hero";
import {
  SchoolTeacherImage1,
  SchoolTeacherImage2,
  SchoolTeacherImage3,
} from "../assets/images/png";
import ReactPaginate from "react-paginate";

const AdditionLessons = () => {
  return (
    <section className="school-teacher-page">
      <h1 className="visually-hidden">O'qituvchilar</h1>
      <BackgroundHeroImg
        url={HeroBigImage6}
        title="Mehnatsevar, fidokor o’qituvchilarimiz"
      />

      <div className="container">
        <ul className="school-teacher-page__list">
          <li className="school-teacher-page__item">
            <img
              width={355}
              height={320}
              src={SchoolTeacherImage1}
              alt="Toirova Mavjuda Sharapovna"
              className="school-teacher-page__item-image"
            />
            <div className="school-teacher-page__info">
              <h2 className="school-teacher-page__info-title">Direktor</h2>
              <h3 className="school-teacher-page__info-sub-title">
                Toirova Mavjuda Sharapovna
              </h3>
              <p className="school-teacher-page__info-text">
                Oliy toifali Matematika o’qituvchisi
              </p>
            </div>
            <hr className="school-teacher-page__item-horizontal-rule" />
            <div className="school-teacher-page__about">
              <h2 className="school-teacher-page__about-title">
                O’qituvchi haqida qisqacha
              </h2>
              <p className="school-teacher-page__about-text">
                5 yillik tajribaga ega, 340 dan ziyod o’quvchilarga dars bergan
                fidokor o’qituvchi.
              </p>
            </div>
          </li>
          <li className="school-teacher-page__item">
            <img
              width={355}
              height={320}
              src={SchoolTeacherImage2}
              alt="Toirova Mavjuda Sharapovna"
              className="school-teacher-page__item-image"
            />
            <div className="school-teacher-page__info">
              <h2 className="school-teacher-page__info-title">
                Direktor o’rinbosari
              </h2>
              <h3 className="school-teacher-page__info-sub-title">
                Toirova Mavjuda Sharapovna
              </h3>
              <p className="school-teacher-page__info-text">
                Oliy toifali Matematika o’qituvchisi
              </p>
            </div>
            <hr className="school-teacher-page__item-horizontal-rule" />
            <div className="school-teacher-page__about">
              <h2 className="school-teacher-page__about-title">
                O’qituvchi haqida qisqacha
              </h2>
              <p className="school-teacher-page__about-text">
                5 yillik tajribaga ega, 340 dan ziyod o’quvchilarga dars bergan
                fidokor o’qituvchi.
              </p>
            </div>
          </li>
          <li className="school-teacher-page__item">
            <img
              width={355}
              height={320}
              src={SchoolTeacherImage3}
              alt="Toirova Mavjuda Sharapovna"
              className="school-teacher-page__item-image"
            />
            <div className="school-teacher-page__info">
              <h2 className="school-teacher-page__info-title">O’qituvchi</h2>
              <h3 className="school-teacher-page__info-sub-title">
                Toirova Mavjuda Sharapovna
              </h3>
              <p className="school-teacher-page__info-text">
                Oliy toifali Matematika o’qituvchisi
              </p>
            </div>
            <hr className="school-teacher-page__item-horizontal-rule" />
            <div className="school-teacher-page__about">
              <h2 className="school-teacher-page__about-title">
                O’qituvchi haqida qisqacha
              </h2>
              <p className="school-teacher-page__about-text">
                5 yillik tajribaga ega, 340 dan ziyod o’quvchilarga dars bergan
                fidokor o’qituvchi.
              </p>
            </div>
          </li>
        </ul>
        <ReactPaginate
          nextLabel={">"}
          previousLabel={"<"}
          nextLinkClassName="school-library-page-pagination-link"
          pageLinkClassName="school-library-page-pagination-link"
          previousLinkClassName="school-library-page-pagination-link"
          pageCount={10} // Umumiy sahifalar soni
          marginPagesDisplayed={2} // Oyina orqali chiqadigan tugmachalar soni
          pageRangeDisplayed={1} // Ekrandagi sahifalar soni
          containerClassName={"school-library-page-pagination"}
          activeClassName={"school-library-page-pagination-active"}
        />
      </div>
    </section>
  );
};

export default AdditionLessons;
