const BackgroundHeroImg = ({ url, title }: { url: string; title: string }) => {
  return (
    <section
      className="background-hero-img"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="container">
        <div className="background-hero-img__content">
          <h2 className="background-hero-img__content-title">{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default BackgroundHeroImg;
