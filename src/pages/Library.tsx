import ReactPaginate from "react-paginate";
import { HeroBigImage4 } from "../assets/images/jpg";
import { SearchIcon, UploadImage } from "../assets/images/svg";
import { BackgroundHeroImg, Button, Input } from "../components";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  LibraryImage1,
  LibraryImage2,
  LibraryImage3,
  LibraryImage4,
} from "../assets/images/png";

const Library = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  type buttonsType = {
    id: number;
    text: string;
    category: string;
  };

  const buttons: buttonsType[] = [
    {
      id: 1,
      text: "Barchasi",
      category: "barchasi",
    },
    {
      id: 2,
      text: "Badiiy asarlar",
      category: "badiiy-asarlar",
    },
    {
      id: 3,
      text: "Darsliklar",
      category: "darsliklar",
    },
    {
      id: 4,
      text: "Ilmiy asarlar",
      category: "ilmiy-asarlar",
    },
  ];

  const category = searchParams.get("category") || "barchasi";

  const setSearchParam = (category: string) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  return (
    <section className="school-courses">
      <h1 className="visually-hidden">Tadbirlar</h1>
      <BackgroundHeroImg
        url={HeroBigImage4}
        title="Kutubxonamiz doim bilimga chanqoq o’quvchilar bilan to’la"
      />

      <section className="school-library-page">
        <div className="container">
          <span className="school-courses__links">
            <Link to="/" className="school-courses__links-link">
              Bosh sahifa
            </Link>
            /
            <Link to={location.pathname} className="school-courses__links-link">
              Kutubxona
            </Link>
          </span>

          <div className="school-library-page__filter">
            <div className="school-library-page__search">
              <Input
                type="search"
                placeholder="Kitob nomini kiriting"
                className="school-library-page__search-input"
              />
              <img
                width={24}
                height={24}
                src={SearchIcon}
                alt="search icon"
                className="school-library-page__search-icon"
              />
            </div>

            <ul className="school-library-page__list">
              {buttons.length > 0 &&
                buttons.map((el: buttonsType) => {
                  return (
                    <li className="school-library-page__item" key={el.id}>
                      <Button
                        type="button"
                        onClick={() => setSearchParam(el.category)}
                        className={`school-library-page__item-btn ${
                          el.category === category &&
                          "school-library-page__item-btn--active"
                        }`}
                      >
                        {el.text}
                      </Button>
                    </li>
                  );
                })}
            </ul>
          </div>

          <ul className="school-library-page__cards">
            <li className="school-library-page__card">
              <img
                width={305}
                height={440}
                src={LibraryImage1}
                alt="library image"
                className="school-library-page__card-image"
              />
              <footer className="school-library-page__footer">
                <Button
                  type="button"
                  className="school-library-page__footer-btn school-library-page__footer-btn--read"
                >
                  O’qishni boshlang
                </Button>
                <a
                  href="#"
                  download
                  className="school-library-page__footer-btn"
                >
                  <img
                    width={24}
                    height={24}
                    src={UploadImage}
                    alt="upload image"
                    className="school-library-page__footer-image"
                  />
                </a>
              </footer>
            </li>
            <li className="school-library-page__card">
              <img
                width={305}
                height={440}
                src={LibraryImage2}
                alt="library image"
                className="school-library-page__card-image"
              />
              <footer className="school-library-page__footer">
                <Button
                  type="button"
                  className="school-library-page__footer-btn school-library-page__footer-btn--read"
                >
                  O’qishni boshlang
                </Button>
                <a
                  href="#"
                  download
                  className="school-library-page__footer-btn"
                >
                  <img
                    width={24}
                    height={24}
                    src={UploadImage}
                    alt="upload image"
                    className="school-library-page__footer-image"
                  />
                </a>
              </footer>
            </li>
            <li className="school-library-page__card">
              <img
                width={305}
                height={440}
                src={LibraryImage3}
                alt="library image"
                className="school-library-page__card-image"
              />
              <footer className="school-library-page__footer">
                <Button
                  type="button"
                  className="school-library-page__footer-btn school-library-page__footer-btn--read"
                >
                  O’qishni boshlang
                </Button>
                <a
                  href="#"
                  download
                  className="school-library-page__footer-btn"
                >
                  <img
                    width={24}
                    height={24}
                    src={UploadImage}
                    alt="upload image"
                    className="school-library-page__footer-image"
                  />
                </a>
              </footer>
            </li>
            <li className="school-library-page__card">
              <img
                width={305}
                height={440}
                src={LibraryImage4}
                alt="library image"
                className="school-library-page__card-image"
              />
              <footer className="school-library-page__footer">
                <Button
                  type="button"
                  className="school-library-page__footer-btn school-library-page__footer-btn--read"
                >
                  O’qishni boshlang
                </Button>
                <a
                  href="#"
                  download
                  className="school-library-page__footer-btn"
                >
                  <img
                    width={24}
                    height={24}
                    src={UploadImage}
                    alt="upload image"
                    className="school-library-page__footer-image"
                  />
                </a>
              </footer>
            </li>
            <li className="school-library-page__card">
              <img
                width={305}
                height={440}
                src={LibraryImage1}
                alt="library image"
                className="school-library-page__card-image"
              />
              <footer className="school-library-page__footer">
                <Button
                  type="button"
                  className="school-library-page__footer-btn school-library-page__footer-btn--read"
                >
                  O’qishni boshlang
                </Button>
                <a
                  href="#"
                  download
                  className="school-library-page__footer-btn"
                >
                  <img
                    width={24}
                    height={24}
                    src={UploadImage}
                    alt="upload image"
                    className="school-library-page__footer-image"
                  />
                </a>
              </footer>
            </li>
            <li className="school-library-page__card">
              <img
                width={305}
                height={440}
                src={LibraryImage2}
                alt="library image"
                className="school-library-page__card-image"
              />
              <footer className="school-library-page__footer">
                <Button
                  type="button"
                  className="school-library-page__footer-btn school-library-page__footer-btn--read"
                >
                  O’qishni boshlang
                </Button>
                <a
                  href="#"
                  download
                  className="school-library-page__footer-btn"
                >
                  <img
                    width={24}
                    height={24}
                    src={UploadImage}
                    alt="upload image"
                    className="school-library-page__footer-image"
                  />
                </a>
              </footer>
            </li>
            <li className="school-library-page__card">
              <img
                width={305}
                height={440}
                src={LibraryImage3}
                alt="library image"
                className="school-library-page__card-image"
              />
              <footer className="school-library-page__footer">
                <Button
                  type="button"
                  className="school-library-page__footer-btn school-library-page__footer-btn--read"
                >
                  O’qishni boshlang
                </Button>
                <a
                  href="#"
                  download
                  className="school-library-page__footer-btn"
                >
                  <img
                    width={24}
                    height={24}
                    src={UploadImage}
                    alt="upload image"
                    className="school-library-page__footer-image"
                  />
                </a>
              </footer>
            </li>
            <li className="school-library-page__card">
              <img
                width={305}
                height={440}
                src={LibraryImage4}
                alt="library image"
                className="school-library-page__card-image"
              />
              <footer className="school-library-page__footer">
                <Button
                  type="button"
                  className="school-library-page__footer-btn school-library-page__footer-btn--read"
                >
                  O’qishni boshlang
                </Button>
                <a
                  href="#"
                  download
                  className="school-library-page__footer-btn"
                >
                  <img
                    width={24}
                    height={24}
                    src={UploadImage}
                    alt="upload image"
                    className="school-library-page__footer-image"
                  />
                </a>
              </footer>
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
    </section>
  );
};

export default Library;
