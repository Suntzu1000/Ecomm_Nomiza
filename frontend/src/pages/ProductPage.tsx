import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../hooks/productHooks";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import Row from "../components/Row";
import Col from "../components/Col";
import ListGroup from "../components/ListGroups/ListGroup";
import ListGroupItem from "../components/ListGroups/ListGroupItem";
import Rating from "../components/Rating";
import Card from "../components/CardProps/Card";
import CardBody from "../components/CardProps/CardBody";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!);

  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen min-w-full">
      <LoadingBox />
    </div>
  ) : error ? (
    <div className="min-w-full">
      <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    </div>
  ) : !product ? (
    <MessageBox variant="danger">PRODUTO NÃO ENCONTRADO</MessageBox>
  ) : (
    <div>
      <Row className="grid grid-cols-3">
        <Col md={6} className="flex-grow-1">
          <img
            className="w-[90%] h-auto mb-4"
            src={product.image}
            alt={product.name}
          />
        </Col>
        <Col md={3} className="flex-grow-1">
          <ListGroup className="text-left" variant="flush">
            <ListGroupItem className="font-bold text-2xl">
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                className="flex space-x-4"
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroupItem>
            <ListGroupItem className="flex space-x-1">
              <h4 className="font-bold">Preço:</h4>
              <p> R${product.price}</p>
            </ListGroupItem>
            <ListGroupItem className="flex space-x-1">
              <h4 className="font-bold">Descrição:</h4>
              <p>{product.description}</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <ListGroup variant="flush">
                <ListGroupItem >
                  <Row className="" >
                    <Col>Preço:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
