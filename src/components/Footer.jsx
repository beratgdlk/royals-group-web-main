import { Container, Row } from "react-bootstrap";

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
                      E-Posta Adres:
                    </label>
                    <input
                      type="text"
                      id="surname"
                      placeholder="E-Posta Adresiniz..."
                      name="surname"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark fs-5 px-5 py-1">
                    Ekle
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-12 col-xxl-4 col-md-12 col-sm-12">
              <h3 className="text-light fw-light mt-sm-4">Bize Ulaşın</h3>
              <hr />
              <p className="py-2 text-light">
                <strong>Adres:</strong>
                Halkalı Merkez, Avrupa Yakası, Basın Ekspres Cd. No:19/1/1,
                34303 Küçükçekmece / İstanbul
              </p>
              <p className="text-light">
                {" "}
                <span>
                  <strong>Telefon: </strong>0 212 456 7803
                </span>
              </p>
              <p className="text-light">
                {" "}
                <span>
                  <strong>Email: </strong>info@ambalaj.com.tr
                </span>
              </p>
              <p className="text-light">
                <span>
                  <strong>Web: </strong>
                  https://example.com.tr
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
