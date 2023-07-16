import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import CheckoutSteps from "../components/CheckoutStep";
import Form from "../components/Form";
import Button from "../components/Button";

export default function ShippingAddressPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);

  const {
    user,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [cep, setCep] = useState(shippingAddress.cep || "");
  const [country, setCountry] = useState(shippingAddress.country || "");

  useEffect(() => {
    if (!user) {
      navigate("/entrar?redirect=/envio");
    }
  }, [user, navigate]);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        cep,
        country,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        cep,
        country,
      })
    );
    navigate("/pagamento");
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center" >
      <Helmet>
        <title>Endereço para envio</title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3 text-white text-3xl font-semibold">Endereço para envio</h1>
        <Form onSubmit={submitHandler} >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="fullname">Nome Completo</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="address">Endereço</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="city">Cidade</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="cep">CEP</Form.Label>
            <Form.Control
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="country">País</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>

          <div className="mb-3 text-left ">
            <Button variant="primary" type="submit">
              Continuar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
