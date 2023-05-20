
import Row from "../components/Row";
import { sampleProducts } from "../data";
import Col from "../components/Col";

export default function HomePage() {
  return (
    <>
      <Row className="grid lg:grid-cols-4 md:grid-cols-2">
        {sampleProducts.map((product) => (
          <Col key={product.slug}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p>R${product.price}</p>
          </Col>
        ))}
      </Row>
    </>
  );
}
