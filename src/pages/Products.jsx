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
import Navbar from "../components/NavbarComp";
import AltFooter from "../components/AltFooter";
import Footer from "../components/Footer";

function Products() {
  const { categories } = useParams();
  console.log(categories);

  const products = ProductsData[categories] || [];

  return (
    <>
      <div className="container-fluid p-0 banner-container">
        <img src="/src/assets/images/banners-images/productBannerImage.png" />
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
