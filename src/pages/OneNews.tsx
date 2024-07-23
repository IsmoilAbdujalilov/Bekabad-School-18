import { Link, useLocation, useParams } from "react-router-dom";
import { SchoolBigNewsImage } from "../assets/images/jpg";
import { Calendar } from "../assets/images/svg";

const AdditionLessons = () => {
  const location = useLocation();

  const { id } = useParams();

  return (
    <section className="school-one-news">
      <h1 className="visually-hidden">{id}</h1>

      <div className="container">
        <img
          alt={id}
          height={591}
          width={980}
          src={SchoolBigNewsImage}
          className="school-one-news-big-image"
        />
        <span className="school-courses__links school-one-news__links">
          <Link to="/" className="school-courses__links-link">
            Bosh sahifa
          </Link>
          /
          <Link
            to="/pages/news"
            className="school-courses__links-link school-courses__links-link--gray"
          >
            Yangiliklar
          </Link>
          /
          <Link to={location.pathname} className="school-courses__links-link">
            {id}
          </Link>
        </span>
        <div className="school-one-news__content">
          <h2 className="school-one-news__content-title">
            Alisher Navoiyning Xamsa asariga atab sahna ko’rinishi
          </h2>
          <div className="school-one-news__date">
            <svg
              width="24"
              fill="none"
              height="24"
              viewBox="0 0 24 25"
              xmlns="http://www.w3.org/2000/svg"
              className="school-one-news__date-icon"
            >
              <path
                stroke="#515865"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.75 18.1073V18.0299M12.25 18.1073V18.0299M12.25 13.9157V13.8383M16.25 13.9157V13.8383M4.75 9.80134H18.75M6.55952 3.88708V5.43012M16.75 3.88708V5.42993M16.75 5.42993H6.75C5.09315 5.42993 3.75 6.81145 3.75 8.51563V18.8014C3.75 20.5056 5.09315 21.8871 6.75 21.8871H16.75C18.4069 21.8871 19.75 20.5056 19.75 18.8014L19.75 8.51563C19.75 6.81145 18.4069 5.42993 16.75 5.42993Z"
              />
            </svg>
            <span className="school-one-news__date-text">12.03.2023</span>
          </div>
          <p className="school-one-news__content-text">
            Semper feugiat nibh sed pulvinar proin. Sed velit dignissim sodales
            ut eu sem integer vitae justo. Sit amet consectetur adipiscing elit.
            Placerat orci nulla pellentesque dignissim. Magna ac placerat
            vestibulum lectus mauris ultrices eros in cursus. Faucibus ornare
            suspendisse sed nisi lacus sed viverra tellus in. Vel pharetra vel
            turpis nunc eget lorem dolor sed viverra. Varius sit amet mattis
            vulputate enim. Ac placerat vestibulum lectus mauris ultrices eros
            in. Vitae semper quis lectus nulla at volutpat diam ut. Integer
            vitae justo eget magna fermentum. Maecenas accumsan lacus vel
            facilisis. Viverra tellus in hac habitasse platea dictumst
            vestibulum rhoncus est. Ultrices dui sapien eget mi proin. Vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Suspendisse sed
            nisi lacus sed viverra tellus in hac. Quis eleifend quam adipiscing
            vitae. Pellentesque habitant morbi tristique senectus. Habitant
            morbi tristique senectus et. Gravida in fermentum et sollicitudin ac
            orci phasellus. Sagittis id consectetur purus ut faucibus. Nisl
            tincidunt eget nullam non nisi est sit amet. Nulla pharetra diam sit
            amet nisl suscipit. In ante metus dictum at tempor commodo
            ullamcorper. At erat pellentesque adipiscing commodo. Curabitur
            vitae nunc sed velit dignissim sodales ut eu sem. Pulvinar elementum
            integer enim neque volutpat ac tincidunt. Cras ornare arcu dui
            vivamus arcu felis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionLessons;
