import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import Card from "./CardProps/Card";

import Rating from "./Rating";
import CardBody from "./CardProps/CardBody";
import CardTitle from "./CardProps/CardTitle";
import CardText from "./CardProps/CardText";
import Button from "./Button";

function ProductItem({ product }: { product: Product }) {
  return (
    <>
      <Card>
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
        </Link>
        <CardBody>
          <Link to={`/product/${product.slug}`}>
            <CardTitle>{product.name}</CardTitle>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <CardText>${product.price}</CardText>
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Fora de Estoque
            </Button>
          ) : (
            <Button>Add em Carrinho</Button>
          )}
        </CardBody>
      </Card>
      ;
    </>
  );
}

export default ProductItem;
