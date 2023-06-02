
import Row from "../components/Row";
import Col from "../components/Col";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";



export default function HomePage() {

  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <>
      <Row className="grid lg:grid-cols-4 md:grid-cols-2">
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
