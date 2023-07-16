import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { useSignupMutation } from "../hooks/userHook";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import Container from "../components/Container";
import { Helmet } from "react-helmet-async";
import Form from "../components/Form";
import Button from "../components/Button";

export default function SignupPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state, dispatch } = useContext(Store);
  const { user } = state;

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  const { mutateAsync: signup } = useSignupMutation();

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("SENHA NÃO CONFERE!");
      return;
    }
    try {
      const data = await signup({
        name,
        email,
        password,
      });
      dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect);
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  return (
    <Container className="small-container bg-gray-800 rounded-md shadow-lg p-8 mx-auto">
      <Helmet>
        <title>Inscrição</title>
      </Helmet>
      <h1 className="my-3 text-white text-3xl font-semibold">Inscrição</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Nome</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Senha</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="confirmPassword">Confirmar Senha</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mb-3 text-left">
             <Button className="w-[25%] py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none" type="submit">Criar Conta</Button>
           </div>
           <div className="mb-3 text-sm text-white">
             Já possui uma Conta?{' '}
             <Link className="text-indigo-500 underline text-lg" to={`/entrar?redirect=${redirect}`}>Login</Link>
           </div>
      </Form>
    </Container>
  );
}
