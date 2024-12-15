import RsgBannerFotoOne from "../assets/rsg-banner1.png";
import RsgBannerFotoTwo from "../assets/rsg-banner2.png";
import RsgBannerFotoThree from "../assets/rsg-banner3.png";
import RsgBannerFotoFour from "../assets/rsg-banner4.png";

function HeroSection() {
  return (
    <div id="carouselExample" className="carousel slide slider-container">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={RsgBannerFotoOne} className="slider-image" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={RsgBannerFotoTwo} className="slider-image" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={RsgBannerFotoThree} className="slider-image" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={RsgBannerFotoFour} className="slider-image" alt="..." />
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
