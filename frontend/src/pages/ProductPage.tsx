import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../hooks/productHooks";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { convertProductToCartItem, getError } from "../utils";
import { ApiError } from "../types/ApiError";
import Row from "../components/Row";
import Col from "../components/Col";
import ListGroup from "../components/ListGroups/ListGroup";
import ListGroupItem from "../components/ListGroups/ListGroupItem";
import Rating from "../components/Rating";
import Card from "../components/CardProps/Card";
import CardBody from "../components/CardProps/CardBody";
import Badge from "../components/Badge";
import { BadgeSize, BadgeVariant } from "../types/badge";
import Button from "../components/Button";
import { useContext } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";

export default function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product!._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product!.countInStock < quantity) {
      toast.warn("Desculpe. Produto está fora de estoque!");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...convertProductToCartItem(product!), quantity },
    });
    toast.success("Product added to the cart");
    navigate("/cart");
  };

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
      <Row className={`grid grid-cols-3`}>
        <Col md={6} className="flex-grow-1">
          <img
            className="w-[100%] h-auto mb-4"
            src={product?.image}
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
                <ListGroupItem>
                  <Row className="flex justify-between items-center space-x-4">
                    <h3 className="text-xl  font-bold">Preço:</h3>
                    <p className="font-semibold">R${product.price}</p>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="flex justify-between items-center space-x-4">
                    <h1 className="text-xl font-bold">Status:</h1>
                    <p>
                      {product.countInStock > 0 ? (
                        <Badge
                          variant={BadgeVariant.SUCCESS}
                          size={BadgeSize.SMALL}
                        >
                          Em Estoque
                        </Badge>
                      ) : (
                        <Badge
                          variant={BadgeVariant.ERROR}
                          size={BadgeSize.SMALL}
                        >
                          Indisponível
                        </Badge>
                      )}
                    </p>
                  </Row>
                </ListGroupItem>
                {product.countInStock > 0 && (
                  <ListGroupItem className="">
                    <div className="w-full ">
                      <Button onClick={addToCartHandler}variant="success">
                        Adicionar em Carrinho
                      </Button>
                    </div>
                  </ListGroupItem>
                )}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
