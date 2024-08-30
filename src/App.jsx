import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import { Container, Row } from "react-bootstrap";
import MainSection from "./components/main/MainSection";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {setProducts(data)
    
  });
  }, []);

  return (
    <>
      <Header />
      <Container>
      <Row className="pt-5">
        {products.map((product, index) => (
          <MainSection key={index} product={product} />
        ))}
      </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
