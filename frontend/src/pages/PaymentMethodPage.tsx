import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
import CheckoutSteps from "../components/CheckoutStep";
import { Helmet } from "react-helmet-async";
import Form from "../components/Form";
import Button from "../components/Button";

export default function PaymentMethodPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);

  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || "PayPal"
  );
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/envio");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/encomendar");
  };

  return(
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
      <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
      <div className="container small-container" >
        <Helmet>
          <title>Método de Pagamento</title>
        </Helmet>
        <h1 className="my-3 text-white text-3xl font-semibold text-left" >Método de Pagamento</h1>
        <Form onSubmit={submitHandler} className="text-left" >
          <div className="mb-3">
          <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continuar</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
