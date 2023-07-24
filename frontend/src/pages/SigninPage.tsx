import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { useSigninMutation } from "../hooks/userHook";
import { ApiError } from "../types/ApiError";
import { toast } from "react-toastify";
import { getError } from "../utils";
import Container from "../components/Container";
import { Helmet } from "react-helmet-async";
import Form from "../components/Form";
import Button from "../components/Button";
import LoadingBox from "../components/LoadingBox";

export default function SigninPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(Store);
  const { user } = state;
  const { mutateAsync: signin, isLoading } = useSigninMutation();

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await signin({
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

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  return (
    <Container className="small-container bg-gray-800 rounded-md shadow-lg p-8 mx-auto">
      <Helmet>
        <title>Acessar</title>
      </Helmet>
      <h1 className="my-3 text-white text-3xl font-semibold">Entrar</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="mb-3 text-left">
             <Button className="w-[15%] py-3 " disabled={isLoading} type="submit">
               Login
             </Button>
             {isLoading && <LoadingBox />}
           </div>
           <div className="mb-3 text-sm text-white">
             Novo Cliente?{' '}
             <Link className="text-indigo-500 underline" to={`/inscricao?redirect=${redirect}`}>Crie sua conta</Link>
           </div>
      </Form>
    </Container>
  );
}
