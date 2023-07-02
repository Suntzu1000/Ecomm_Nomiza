import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { CartItem } from "../types/Crt";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Row from "../components/Row";
import Col from "../components/Col";
import MessageBox from "../components/MessageBox";
import ListGroup from "../components/ListGroups/ListGroup";
import ListGroupItem from "../components/ListGroups/ListGroupItem";
import Button from "../components/Button";
import Card from "../components/CardProps/Card";
import CardBody from "../components/CardProps/CardBody";

export default function CartPage() {
  const navigate = useNavigate();
  const {
    state: {
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
    navigate('/singin?redirect=/shipping')
  }

  return (
    <>
      <div>
        <Helmet>
          <title>Carrinho de Compras</title>
        </Helmet>
        <h1>Carrinho de Compras</h1>
        <Row>
          <Col md={8}  >
            {cartItems.length === 0 ? (
              <MessageBox>
                Carrinho Vazio! <Link to="/">Ir Para Compras</Link>
              </MessageBox>
            ) : (
              <ListGroup>
                {cartItems.map((item: CartItem) => (
                  <ListGroupItem key={item._id}>
                    <Row className="align-items-center">
                      <Col md={4} className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail w-[10%] "
                        />
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      
                      <Col md={3} >
                        
                        <Button
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1)
                          }
                          variant="light"
                          disabled={item.quantity === 1}
                        >
                          <i className="fas fa-minus-circle"></i>
                        </Button>{" "}
                        <span>{item.quantity}</span>{" "}
                        <Button
                          variant="light"
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                          disabled={item.quantity === item.countInStock}
                        >
                          <i className="fas fa-plus-circle"></i>
                        </Button>
                      </Col>
                      <Col md={3}>R${item.price}</Col>
                      <Col md={2}>
                        <Button variant="light">
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card>
              <CardBody>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <h3>
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                      items) : R$
                      {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                    </h3>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="d-grid">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                      >
                        Fazer Checkout
                      </Button>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
