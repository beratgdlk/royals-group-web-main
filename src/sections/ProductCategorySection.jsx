import { Container, Row, Col } from "react-bootstrap";
import KofteciYusufLogo from "../assets/images/köfteciYusuf.png";
import LcwLogo from "../assets/images/lcwaikikilogo.png";
import MedipolLogo from "../assets/images/medipol-Logo.png";
import CevreLogo from "../assets/images/çevreLogo.png";
import GloraDispenser from "../assets/images/glora-dispenser.jpg";
import MiradaAdanaSis from "../assets/images/mirada-adana-sis.jpg";
import TemizlikEldiven from "../assets/images/temizlik-eldiven.jpg";
import Bicak from "../assets/images/bicak.jpeg";
import GloraCopTorba from "../assets/images/glora-cöp-torba1.jpeg";
import KartonBardak from "../assets/images/karton-bardak.webp";
import StrecFilm from "../assets/images/strec-film-3.jpg";
import PaketTuz from "../assets/images/paket-tuz.jpg";

function ProductCategorySection() {
  return (
    <Container className="my-5 py-5" id="product-categories">
      <div className="text-center mb-3">
        <h3 className="display-4">Ürün Kategorileri</h3>
        <p className="fw-light">Royal&apos;s Group</p>
      </div>

      <Row className="my-1">
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Temizlik Kagıtları</h4>
          <img
            className="img-fluid"
            src={GloraDispenser}
            alt="Temizlik Kağıtları"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Ahşap Ürünler</h4>
          <img
            className="img-fluid"
            src={MiradaAdanaSis}
            alt="Ahşap Ürünler"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Hijyenik Ürünler</h4>
          <img
            className="img-fluid"
            src={TemizlikEldiven}
            alt="Hijyenik Ürünler"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Plastik Ürünler</h4>
          <img
            className="img-fluid"
            src={Bicak}
            alt="Plastik Ürünler"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Çöp Torbaları</h4>
          <img
            className="img-fluid"
            src={GloraCopTorba}
            alt="Çöp Torbaları"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Kağıt Ve Karton</h4>
          <img
            className="img-fluid"
            src={KartonBardak}
            alt="Kağıt Ve Karton"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Streç Grubu</h4>
          <img
            className="img-fluid"
            src={StrecFilm}
            alt="Streç Grubu"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Diger Ürünler</h4>
          <img
            className="img-fluid"
            src={PaketTuz}
            alt="Diğer Ürünler"
          />
        </Col>
      </Row>
      <div className="row d-grid">
        <div className="text-center">
          <a
            href="../assets/royalskatalog.pdf"
            target="_blank"
            className="catalog btn fs-5"
          >
            Tüm Ürünler
          </a>
        </div>
        <hr className="divider" />
      </div>

      <Row className="mt-5 py-3 d-flex justify-content-center">
        <div className="text-center">
          <h4 className="fw-light display-5">Referanslarımız</h4>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center  sponsor-content">
            <img src={KofteciYusufLogo} alt="Köfteci Yusuf Logo" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img src={LcwLogo} alt="LC Waikiki Logo" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img
              className="img-fluid"
              src={MedipolLogo}
              alt="Medipol Logo"
            />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img
              className="img-fluid"
              src={CevreLogo}
              alt="Çevre Logo"
            />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default ProductCategorySection;
