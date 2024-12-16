import Carousel from "react-bootstrap/Carousel";
import RsgBanner1 from "../assets/images/rsg-banner1.png";
import RsgBanner2 from "../assets/images/rsg-banner2.png";
import RsgBanner3 from "../assets/images/rsg-banner3.png";
import RsgBanner4 from "../assets/images/rsg-banner4.png";

function HeroSection() {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 active"
            src={RsgBanner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={RsgBanner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={RsgBanner3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={RsgBanner4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;
