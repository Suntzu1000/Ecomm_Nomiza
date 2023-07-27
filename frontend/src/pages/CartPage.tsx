import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { CartItem } from "../types/Crt";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Row from "../components/Row";
import Col from "../components/Col";
import MessageBox from "../components/MessageBox";
import ListGroup from "../components/ListGroup";
import Button from "../components/Button";
import Card from "../components/Card";
import H1 from "../components/H1";

export default function CartPage() {
  const navigate = useNavigate();
  const {
    state: {
      mode,
      cart: { cartItems },
    },
    dispatch,
  } = useContext(Store);

  const updateCartHandler = async (item: CartItem, quantity: number) => {
    if (item.countInStock < quantity) {
      toast.warn("Desculpe. Produto está fora de estoque!");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const checkoutHandler = () => {
    navigate("/entrar?redirect=/envio");
  };

  const removeItemHandler = (item: CartItem) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Carrinho de Compras</title>
        </Helmet>
        <H1 className="text-left text-3xl font-bold">Carrinho de Compras</H1>
        <Row>
          <Col md={8}>
            {cartItems.length === 0 ? (
              <MessageBox>
                Carrinho Vazio! <Link to="/">Ir Para Compras</Link>
              </MessageBox>
            ) : (
              <ListGroup>
                {cartItems.map((item: CartItem) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                     <Col className="md:flex md:space-x-4">
  <Col md={4} className="flex items-center md:space-x-4">
    <img
      src={item.image}
      alt={item.name}
      className="md:w-1/2 rounded img-thumbnail"
    />
    <Link to={`/product/${item.slug}`} className="md:w-1/2">
      {item.name}
    </Link>
  </Col>

  <Col md={3} className="md:flex md:items-center md:justify-between">
    <Button
      onClick={() => updateCartHandler(item, item.quantity - 1)}
      variant={mode as "dark" | "light"}
      disabled={item.quantity === 1}
      className="flex items-center"
    >
      <i className="fas fa-minus-circle"></i>
    </Button>
    <span>{item.quantity}</span>
    <Button
      variant={mode as "dark" | "light"}
      onClick={() => updateCartHandler(item, item.quantity + 1)}
      disabled={item.quantity === item.countInStock}
      className="flex items-center"
    >
      <i className="fas fa-plus-circle"></i>
    </Button>
  </Col>

  <Col md={3} className="md:flex md:items-center md:justify-center">
    R${item.price}
  </Col>

  <Col md={2} className="md:flex md:items-center md:justify-end">
    <Button
      onClick={() => removeItemHandler(item)}
      variant={mode as "dark" | "light"}
      className="flex items-center"
    >
      <i className="fas fa-trash"></i>
    </Button>
  </Col>
</Col>

                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card className="p-2">
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="flex">
                    <div className="w-full flex-wrap">
                      <h3 className="text-2xl">
                        Total ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                        items) : R$
                        {cartItems.reduce(
                          (a, c) => a + c.price * c.quantity,
                          0
                        )}
                      </h3>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item >
                    <div>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                      >
                        Fazer Checkout
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
