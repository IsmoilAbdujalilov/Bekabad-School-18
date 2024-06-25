import Button from "./Button";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Play } from "../assets/images/svg";
import { HeroVideo } from "../assets/video";
import {
  HeroImg1,
  HeroImg2,
  HeroImg3,
  HeroImg4,
  HeroImg5,
} from "../assets/images/jpg";

const Hero = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <section className="hero">
      <div className="container">
        {isOpenModal && (
          <div className="hero__modal">
            <div className="hero__container">
              <FaTimes
                cursor={"pointer"}
                className="hero__modal-icon"
                onClick={() => setIsOpenModal(false)}
              />
              <video className="hero__modal-video" controls autoPlay>
                <source src={HeroVideo} />
              </video>
            </div>
          </div>
        )}
        <div className="hero-content">
          <h1 className="visually-hidden">18 - Maktab</h1>
          <h2 className="hero-text">
            MAKTABIMIZDA HAR BIR LAHZA BILIM OLISH UCHUN IMKONIYATDIR
          </h2>
          <Button
            type="button"
            className="hero-btn"
            onClick={() => setIsOpenModal(true)}
          >
            <span className="hero-btn-text">Showreel</span>
            <span className="hero-btn__bg">
              <img
                src={Play}
                width={15}
                height={13}
                alt="play-icon"
                className="hero-btn__bg-icon"
              />
            </span>
          </Button>
        </div>
        <ul className="hero-images">
          <li className="hero-images__item">
            <img
              width={267}
              height={294}
              src={HeroImg1}
              alt="18 - maktab music festival"
              className="hero-images__item-img"
              title="18 - maktab music festival"
            />
          </li>
          <li className="hero-images__item">
            <img
              width={210}
              height={204}
              src={HeroImg2}
              alt="18 - maktab bolalari"
              title="18 - maktab bolalari"
              className="hero-images__item-img"
            />
          </li>
          <li className="hero-images__item">
            <img
              width={220}
              height={144}
              src={HeroImg3}
              alt="18 - Maktab"
              title="18 - Maktab"
              className="hero-images__item-img"
            />
          </li>
          <li className="hero-images__item">
            <img
              width={210}
              height={204}
              src={HeroImg4}
              alt="18 - Maktab xonalari"
              title="18 - Maktab xonalari"
              className="hero-images__item-img"
            />
          </li>
          <li className="hero-images__item">
            <img
              width={250}
              height={294}
              src={HeroImg5}
              alt="18 - Maktab Dars jarayoni"
              title="18 - Maktab Dars jarayoni"
              className="hero-images__item-img"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
