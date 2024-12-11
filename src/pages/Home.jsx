import "../App.css";
import HeroSection from "../sections/HeroSection";
import ProductCategory from "../sections/ProductCategorySection";
import { FaWhatsapp } from "react-icons/fa6";

function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategory />

      <div className="whatsapp-info">
        <a
          target="_blank"
          href="https://wa.me/+905302877002"
          className="text-white"
        >
          <FaWhatsapp className="fs-1" />
        </a>
      </div>
    </>
  );
}

export default Home;
