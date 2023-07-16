import { CartItem, ShippingAddress } from "./Crt";
import { User } from "./User";

export type Order = {
  _id: string;
  orderItems: CartItem;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  user: User;
  createAt: string;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};
