function HeroSection() {
  return (
    <div id="carouselExample" className="carousel slide slider-container">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/src/assets/images/homepage/rsg-banner1.png"
            className="slider-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/src/assets/images/homepage/rsg-banner2.png"
            className="slider-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/src/assets/images/homepage/rsg-banner3.png"
            className="slider-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/src/assets/images/homepage/rsg-banner4.png"
            className="slider-image"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroSection;
