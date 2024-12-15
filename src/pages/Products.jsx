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

const categoryImages = {
  temizlikKagitlari: "/images/temizlik-kagitlari.png",
  digerÜrünler: "/images/diger-ürünler.png",
  pipetGrubu: "/images/pipetler.png",
  hijyenikÜrünler: "/images/hijyenik-ürünler.png",
  kagıtVeKarton: "/images/kagit-ve-karton.png",
  kaplar: "/images/kaplar.png",
  plastikÜrünler: "/images/plastik-ürünler.png",
  aparatlar: "/images/aparatlar.png"
};

function Products() {
  const { categories } = useParams();
  console.log(categories);

  const products = ProductsData[categories] || [];

  const imageUrl = categoryImages[categories] || "";

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
