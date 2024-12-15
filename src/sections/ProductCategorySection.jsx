import { Container, Row, Col } from "react-bootstrap";

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
            src="../src/assets/glora-dispenser.jpg"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Ahşap Ürünler</h4>
          <img
            className="img-fluid "
            src="../src/assets/mirada-adana-sis.jpg"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Hijyenik Ürünler</h4>
          <img
            className="img-fluid"
            src="../src/assets/temizlik-eldiven.jpg"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Plastik Ürünler</h4>
          <img
            className="img-fluid"
            src="../src/assets/bicak.jpeg"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Çöp Torbaları</h4>
          <img
            className="img-fluid"
            src="../src/assets/glora-cöp-torba1.jpeg"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Kağıt Ve Karton</h4>
          <img
            className="img-fluid"
            src="../src/assets/karton-bardak.webp"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Streç Grubu</h4>
          <img
            className="img-fluid"
            src="../src/assets/strec-film-3.jpg"
          />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
          <h4>Diger Ürünler</h4>
          <img
            className="img-fluid"
            src="../src/assets/paket-tuz.jpg"
          />
        </Col>
      </Row>
      <div className="row d-grid">
        <div className="text-center">
          <a
            href="/public/royalskatalog.pdf"
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
            <img src="../src/assets/köfteciYusuf.png" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img src="../src/assets/lcwaikikilogo.png" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img
              className="img-fluid"
              src="../src/assets/medipol-Logo.png"
            />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img
              className="img-fluid"
              src="../src/assets/çevreLogo.png"
            />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default ProductCategorySection;
