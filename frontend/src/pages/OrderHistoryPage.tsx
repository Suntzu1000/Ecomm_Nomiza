import { useNavigate } from "react-router-dom";
import { useGetOrderHistoryQuery } from "../hooks/orderHooks";
import { Helmet } from "react-helmet-async";
import H1 from "../components/H1";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import Button from "../components/Button";

export default function OrderHistoryPage() {
  const navigate = useNavigate();
  const { data: orders, isLoading, error } = useGetOrderHistoryQuery();

  return (
    <div className="w-full h-full">
      <Helmet>
        <title>Histórico de Pedido</title>
      </Helmet>
      <H1>Histórico de Pedido</H1>
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-2">ID</th>
                <th className="py-2">DATA</th>
                <th className="py-2">TOTAL</th>
                <th className="py-2">PAGO</th>
                <th className="py-2">ENTREGUE</th>
                <th className="py-2">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {orders!.map((order) => (
                <tr key={order._id} className="border-t">
                  <td className="py-2">{order._id}</td>
                  <td className="py-2">{order.createdAt.substring(0, 10)}</td>
                  <td className="py-2">R$ {order.totalPrice.toFixed(2)}</td>
                  <td className="py-2">{order.isPaid ? order.paidAt.substring(0, 10) : "NÃO"}</td>
                  <td className="py-2">{order.isDelivered ? order.deliveredAt.substring(0, 10) : "NÃO"}</td>
                  <td className="py-2">
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => {
                        navigate(`/pedidos/${order._id}`);
                      }}
                    >
                      Detalhes
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
