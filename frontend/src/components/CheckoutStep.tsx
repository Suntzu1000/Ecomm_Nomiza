import Col from "./Col";
import Row from "./Row";

export default function CheckoutSteps(props: {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
}) {
  return (
    <Row className="checkout-steps flex justify-between mb-10">
      <Col className={props.step1 ? "active p-2 rounded" : "p-2 rounded"}>Login</Col>
      <Col className={props.step2 ? "active p-2 rounded" : "p-2 rounded"}>Envio</Col>
      <Col className={props.step3 ? "active p-2 rounded" : "p-2 rounded"}>Pagamento</Col>
      <Col className={props.step4 ? "active p-2 rounded" : "p-2 rounded"}>Pedidos</Col>
    </Row>
  );
}
