import { useEffect, useReducer } from "react";
import Row from "../components/Row";
import { sampleProducts } from "../data";
import Col from "../components/Col";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import axios from "axios";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

type State = {
  products: Product[];
  loading: boolean;
  error: string;
};

type Action =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Product[];
    }
  | { type: "FETCH_FAIL"; payload: string };

const initialState: State = {
  products: [],
  loading: true,
  error: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err as ApiError) });
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
  
    <>
      <Row className="grid lg:grid-cols-4 md:grid-cols-2">
        {sampleProducts.map((product) => (
          <Col key={product.slug}>
            <Link to={`/product/` + product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p>R${product.price}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
