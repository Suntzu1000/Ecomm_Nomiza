import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { useCreateOrderMutation } from "../hooks/orderHooks";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import { toast } from "react-toastify";
import CheckoutSteps from "../components/CheckoutStep";
import { Helmet } from "react-helmet-async";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import ListGroup from "../components/ListGroup";
import Button from "../components/Button";
import LoadingBox from "../components/LoadingBox";

export default function PlaceOrderPage() {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const round2 = (num: number) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.2345 => 123.23
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10);
  cart.taxPrice = round2(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const { mutateAsync: createOrder, isLoading } = useCreateOrderMutation();

  const placeOrderHandler = async () => {
    try {
      const data = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      });
      dispatch({ type: "CART_CLEAR" });
      localStorage.removeItem("cartItems");
      navigate(`/pedidos/${data.order._id}`);
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate("/pagamento");
    }
  }, [cart, navigate]);

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
      <CheckoutSteps step1 step2 step3 step4/>
      <Helmet>
        <title>Visualizar Pedido </title>
      </Helmet>
      <h1 className="my-3 text-white text-3xl font-semibold">Visualizar Pedido</h1>
    <Row className=" " >
        <Col md={8} >
        <Card className="mb-3 text-left">
               <Card.Body >
                 <Card.Title>Envio</Card.Title>
                 <Card.Text>
                   <strong>Nome:</strong> {cart.shippingAddress.fullName} <br />
                   <strong>Endereço: </strong> {cart.shippingAddress.address},
                   {cart.shippingAddress.city}, {cart.shippingAddress.cep},
                   {cart.shippingAddress.country}
                 </Card.Text>
                 <Link className="text-lg text-red-600 hover:text-red-500 font-bold" to="/envio">Editar</Link>
               </Card.Body>
             </Card>

             <Card className="mb-3 text-left">
               <Card.Body>
                 <Card.Title>Pagamento</Card.Title>
                 <Card.Text>
                   <strong>Método:</strong> {cart.paymentMethod}
                 </Card.Text>
                 <Link className="text-lg text-red-600 hover:text-red-500 font-bold" to="/pagamento">Editar</Link>
               </Card.Body>
             </Card>

             <Card className="mb-3 text-left ">
               <Card.Body>
                 <Card.Title>Itens</Card.Title>
                 <ListGroup variant="flush"  >
                   {cart.cartItems.map((item) => (
                     <ListGroup.Item key={item._id} className="flex flex-row" >
                       <Row className=" flex items-center justify-between">
                         <Col md={6} className="flex items-center space-x-3" >
                           <img
                             src={item.image}
                             alt={item.name}
                             className="img-fluid rounded thumbnail"
                           ></img>{' '}
                           <Link to={`/product/${item.slug}`}>{item.name}</Link>
                         </Col>
                         <Col md={3}>
                           <span>{item.quantity}</span>
                         </Col>
                         <Col md={3}>R${item.price}</Col>
                       </Row>
                     </ListGroup.Item>
                   ))}
                 </ListGroup>
                 <Link className=" text-lg text-red-600 hover:text-red-500 font-bold" to="/cart">Editar</Link>
               </Card.Body>
             </Card>
        </Col>
        <Col md={4}  >
          <Card className="h-[100%]" >
            <Card.Body  >
              <Card.Title>Resumo do Pedido</Card.Title>
              <ListGroup variant="flush">
              <ListGroup.Item>
                     <Row>
                       <Col>Unidade:</Col>
                       <Col>${cart.itemsPrice.toFixed(2)}</Col>
                     </Row>
                   </ListGroup.Item>
                   <ListGroup.Item>
                     <Row>
                       <Col>Envio:</Col>
                       <Col>${cart.shippingPrice.toFixed(2)}</Col>
                     </Row>
                   </ListGroup.Item>
                   <ListGroup.Item>
                     <Row>
                       <Col>Taxa:</Col>
                       <Col>${cart.taxPrice.toFixed(2)}</Col>
                     </Row>
                   </ListGroup.Item>

                   <ListGroup.Item>
                     <Row>
                       <Col>
                         <strong className="font-extrabold">Total: </strong>
                       </Col>
                       <Col>
                         <strong>${cart.totalPrice.toFixed(2)}</strong>
                       </Col>
                     </Row>
                   </ListGroup.Item>
                   <ListGroup.Item>
                     <div className="d-grid">
                       <Button
                         type="button"
                         onClick={placeOrderHandler}
                         disabled={cart.cartItems.length === 0 || isLoading}
                       >
                         Encomendar
                       </Button>
                     </div>
                     {isLoading && <LoadingBox></LoadingBox>}
                   </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
  );
}
