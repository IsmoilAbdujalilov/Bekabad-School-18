import { SchoolAboutImage } from "../assets/images/png";

const SchoolAbout = () => {
  return (
    <section className="school-about">
      <div className="container">
        <figure>
          <img
            height={485}
            loading="lazy"
            alt="18-Maktab"
            src={SchoolAboutImage}
            className="school-about-image"
          />
          <figcaption>
            <h1 className="visually-hidden">18 - Maktab haqida</h1>
          </figcaption>

          <p className="school-about-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the releaLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the relea
          </p>
        </figure>
      </div>
    </section>
  );
};

export default SchoolAbout;
