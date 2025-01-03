import { Container, Row, Col } from "react-bootstrap";
import kofteciYusufLogo from "/public/images/köfteciYusuf.png";
import lcwLogo from "/public/images/lcwaikikilogo.png";
import medipolLogo from "/public/images/medipol-Logo.png";
import cevreLogo from "/public/images/çevreLogo.png";

function AboutOneSection() {
  return (
    <Container
      className="my-5"
      style={{ boxShadow: "0 12px 12px rgba(0, 0, 0, 0.2)" }}
    >
      <Row className="d-flex align-items-center">
        <Col>
          <div className="text-center">
            <h2>Hakkımızda</h2>
            <h5>Bizi Tanıyın</h5>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 px-4">
        <p>
          Royal&apos;s Group, 2018 yılından bu yana kâğıt ambalaj ve temizlik
          ürünleri sektöründe hizmet veren, alanında uzmanlaşmış bir firma
          olarak sektördeki yerini güvenle korumaktadır. Faaliyetlerimizi,
          sektöre yönelik derin bilgi birikimimiz ve deneyimli teknik kadromuzun
          gücünden alarak yürütmekteyiz. Müşteri memnuniyetini en öncelikli
          değerimiz olarak kabul etmekte ve her iş sürecimizde kalite
          standartlarından ödün vermeden, verimli ve sürdürülebilir bir hizmet
          anlayışını benimsemekteyiz.
        </p>
        <p>
          Royal&apos;s Group olarak, müşterilerimizin beklentilerini en üst
          düzeyde karşılamayı hedefliyoruz. Ürünlerimizi, kalite odaklı ve
          yüksek standartlarla uyumlu bir şekilde sunarak, güvenilir bir marka
          olarak varlığımızı sürdürmekteyiz.
        </p>
        <p>
          Müşterilerimizle uzun vadeli iş birlikleri kurma amacındayız ve bu
          doğrultuda, dürüstlük, şeffaflık ve güvenilirlik prensiplerine bağlı
          kalarak her geçen gün kendimizi geliştirmekteyiz. Royal&apos;s Group
          olarak, sektördeki yeniliklere hızla adapte olarak müşterilerimize en
          ileri çözümleri sunma hedefiyle hareket etmekteyiz.Bize duyulan
          güvenin sorumluluğuyla, kaliteyi ve müşteri memnuniyetini öncelikli
          değerlerimiz olarak sürdürmeye devam edeceğiz.
        </p>
      </Row>
      <Row className="mt-5 py-3 d-flex justify-content-center">
        <div className="text-center">
          <h4 className="fw-light display-5">Referanslarımız</h4>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center  sponsor-content">
            <img src={kofteciYusufLogo} alt="Köfteci Yusuf Logo" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img src={lcwLogo} alt="LC Waikiki Logo" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img className="img-fluid" src={medipolLogo} alt="Medipol Logo" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 d-flex column-gap-2 justify-content-center">
          <div className="d-flex align-items-center sponsor-content">
            <img className="img-fluid" src={cevreLogo} alt="Çevre Logo" />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default AboutOneSection;
