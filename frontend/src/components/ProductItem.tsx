import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import Card from "./CardProps/Card";
import Rating from "./Rating";
import CardBody from "./CardProps/CardBody";
import CardTitle from "./CardProps/CardTitle";
import CardText from "./CardProps/CardText";
import Button from "./Button";
import { useContext } from "react";
import { Store } from "../Store";
import { CartItem } from "../types/Crt";
import { convertProductToCartItem } from "../utils";
import { toast } from "react-toastify";


function ProductItem({ product }: { product: Product }) {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      toast.warn("Desculpe. Produto sem estoque!");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
    toast.success("Product added to the cart");
  };
  return (
    <>
      <Card>
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
        </Link>
        <CardBody>
          <Link to={`/product/${product.slug}`}>
            <CardTitle>{product.name}</CardTitle>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <CardText>${product.price}</CardText>
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Fora de Estoque
            </Button>
          ) : (
            <Button
              onClick={() =>
                addToCartHandler(convertProductToCartItem(product))
              }
            >
              Add em Carrinho
            </Button>
          )}
        </CardBody>
      </Card>
      ;
    </>
  );
}

export default ProductItem;
