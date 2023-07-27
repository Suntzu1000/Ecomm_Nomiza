import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../hooks/productHooks";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { convertProductToCartItem, getError } from "../utils";
import { ApiError } from "../types/ApiError";
import Row from "../components/Row";
import Col from "../components/Col";
import ListGroup from "../components/ListGroup";
import Rating from "../components/Rating";
import Card from "../components/Card";
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
      <Row >
        <Col md={6} >
          <img
            className="w-[100%] h-auto mb-4"
            src={product?.image}
            alt={product.name}
          />
        </Col>
        <Col md={3} >
          <ListGroup className="text-left" variant="flush">
            <ListGroup.Item className="font-bold text-2xl">
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                className="flex space-x-4"
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item className="flex space-x-1">
              <h4 className="font-bold">Preço:</h4>
              <p> R${product.price}</p>
            </ListGroup.Item>
            <ListGroup.Item className="flex space-x-1">
              <h4 className="font-bold">Descrição:</h4>
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}  >
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row className="flex justify-between items-center ">
                    <h3 className="text-xl  font-bold">Preço:</h3>
                    <p className="font-semibold">R${product.price}</p>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className="flex justify-between items-center">
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
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item className="">
                    <div className="w-full ">
                      <Button onClick={addToCartHandler}variant="success">
                        Adicionar em Carrinho
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
