import { Container, Row } from "react-bootstrap";
import "../css/Footer.scss";

function Footer() {
  return (
    <div className="alt-footer">
      <div className=" container-fluid">
        <Container>
          <Row className="d-flex flex-row align-items-center justify-content-center py-5">
            <div className="col-lg-6 col-xxl-4  col-md-12 col-sm-12">
              <h3 className="fw-light text-light">BİZİ TANIYIN</h3>
              <hr />
              <p className="text-light py-2">
                Müşteri memnuniyetini en öncelikli değerimiz olarak kabul
                etmekte ve her iş sürecimizde kalite standartlarından ödün
                vermeden, verimli ve sürdürülebilir bir hizmet anlayışını
                benimsemekteyiz.
              </p>
            </div>
            <div className="col-lg-6 col-xxl-4  col-md-12 col-sm-12">
              <h3 className="fw-light text-light">E-Bülten</h3>
              <hr />
              <div>
                <form action="mailto:info@royalgroup.com.tr" method="POST">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">
                      Adınız:
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Adınız Soyadınız..."
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="surname" className="form-label text-white">
                      E-Posta Adresi:
                    </label>
                    <input
                      type="text"
                      id="surname"
                      placeholder="E-Posta Adresiniz..."
                      name="surname"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-send fs-5 px-5 py-1">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-12 col-xxl-4 col-md-12 col-sm-12">
              <h3 className="text-light fw-light mt-sm-4">Bize Ulaşın</h3>
              <hr />
              <p className="py-2 text-light">
                <strong>Adres:</strong>
                Şahintepe Mahallesi Türker Caddesi, Kartal Sk. No:10, 34494 Başakşehir/İstanbul
              </p>
              <p className="text-light">
                {" "}
                <span>
                  <strong>Telefon: </strong>+90 530 287 70 02
                </span>
              </p>
              <p className="text-light">
                {" "}
                <span>
                  <strong>Email: </strong>info@royalsgroup.com.tr
                </span>
              </p>
              <p className="text-light">
                <span>
                  <strong>Web: </strong>
                  https://royalsgroup.com.tr
                </span>
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
