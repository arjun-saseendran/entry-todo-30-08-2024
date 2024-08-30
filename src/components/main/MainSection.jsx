import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function MainSection({ product }) {
  console.log(product);

  return (
    <Col sm={6} md={4} lg={3}>
      <Card
        className="card overfolw-hidden mb-4 p-2"
        style={{ width: "18rem", height: "30rem" }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "200px" }}
          className="object-fit-contain"
        />
        <Card.Body style={{ height: "25rem", overflow: "hidden" }}>
          <Card.Title style={{ height: "3rem", overflow: "hidden" }}>
            {product.title}
          </Card.Title>
          <Card.Text style={{ height: "6rem", overflow: "hidden" }}>
            {product.description}
          </Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button className="text-white" variant="warning">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MainSection;
