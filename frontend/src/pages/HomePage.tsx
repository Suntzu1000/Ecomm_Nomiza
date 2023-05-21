import { useReducer } from "react";
import Row from "../components/Row";
import { sampleProducts } from "../data";
import Col from "../components/Col";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";

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

  return (
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
