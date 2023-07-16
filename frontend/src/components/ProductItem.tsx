import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import Card from "./Card";
import Rating from "./Rating";
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
    toast.success("ADICIONADO EM CARRINHO!");
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
        <Card.Body>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text>${product.price}</Card.Text>
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
        </Card.Body>
      </Card>
      ;
    </>
  );
}

export default ProductItem;
