import { useParams } from "react-router-dom";
import { Products as ProductsData } from "../data/productsData";
import {
  CardHeader,
  CardImg,
  Container,
  Row,
  Card,
  CardBody,
  CardText,
} from "react-bootstrap";

import temizlikKagitFoto from "../assets/temizlik-kagitlari.png";
import digerÜrünlerFoto from "../assets/diger-ürünler.png";
import pipetlerFoto from "../assets/pipetler.png";
import hijyenikÜrünlerFoto from "../assets/hijyenik-ürünler.png";
import kagıtVeKartonlarFoto from "../assets/kagit-ve-karton.png";
import kaplarFoto from "../assets/kaplar.png";
import plastikÜrünlerFoto from "../assets/plastik-ürünler.png";
import aparatlarFoto from "../assets/aparatlar.png";

function Products() {
  const { categories } = useParams();
  console.log(categories);

  const products = ProductsData[categories] || [];

  let imageUrl = "";

  // Fotografları bir objede tuttuk ve içerisindeki key degerlerini bizim parametre gönderdigimiz kategori ile karşılaştırdık hangisi eşlenirse o fotografı imageUrl ye gönderip src olarak vercek
  const getUrlConditionBg = () => {
    const categoryImages = {
      temizlikKagitlari: temizlikKagitFoto,
      digerÜrünler: digerÜrünlerFoto,
      pipetGrubu: pipetlerFoto,
      hijyenikÜrünler: hijyenikÜrünlerFoto,
      kagıtVeKarton: kagıtVeKartonlarFoto,
      kaplar: kaplarFoto,
      plastikÜrünler: plastikÜrünlerFoto,
      aparatlar: aparatlarFoto,
    };

    imageUrl = categoryImages[categories] || "";
  };

  getUrlConditionBg();

  return (
    <>
      <div className="container-fluid p-0 banner-container">
        <img src={imageUrl} />
      </div>
      <div className="container-fluid product-container my-3">
        <Container>
          <Row>
            {products.map(({ image, name }, index) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center"
                key={index}
              >
                <Card className="card">
                  <CardHeader className="card-header">
                    <CardImg src={image} className="card-image " />
                  </CardHeader>
                  <CardBody>
                    <CardText className="">{name}</CardText>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Products;
