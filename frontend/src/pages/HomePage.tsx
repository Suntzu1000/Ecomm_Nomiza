import { useContext } from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import { Store } from "../Store";

export default function HomePage() {
  const {
    state: { mode }
  } = useContext(Store);

  const { data: products, isLoading, error } = useGetProductsQuery();

  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen min-w-full">
      <LoadingBox />
    </div>
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <>
      <Row
        className={`grid lg:grid-cols-4 md:grid-cols-2 bg-${
          mode === "light" ? "gray-800" : "white"
        }`}
      >
        <Helmet>
          <title>Ecomm Nomiza</title>
        </Helmet>
        {products!.map((product) => (
          <Col key={product.slug}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
