import { useNavigate } from "react-router-dom";
import { ErrorImage } from "../assets/images/png";

const NotFound = () => {
  const navigate = useNavigate();

  const backgroundImage = {
    width: "100%",
    height: "276px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${ErrorImage})`,
  };

  return (
    <section className="error">
      <div className="error-background" style={backgroundImage}>
        <h1 className="visually-hidden">404 Bunday sahifa mavjud emas</h1>
        <div className="container">
          <div className="error__content">
            <h2 className="error__content-title">404</h2>
            <p className="error__content-text">Bunday sahifa mavjud emas</p>
            <button
              type="button"
              className="error__content-btn"
              onClick={() => navigate("/")}
            >
              Bosh sahifa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
