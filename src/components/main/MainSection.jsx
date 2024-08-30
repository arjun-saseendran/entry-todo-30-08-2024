import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Col  from 'react-bootstrap/Col';

function MainSection() {
  return (
    <Col-12 sm={6} md={4} lg={3}>
    <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col-12>
  );
}

export default MainSection;