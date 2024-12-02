import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import SimpleOrderCard from "../components/orders/SimpleOrderCard";
import useGetOrders from "../hooks/api/order/useGetOrders";
import useAuthStore from "../hooks/store/useAuthStore";
import { getOrderCacheKey } from "../utils/keys";

const KitchenPage = () => {
  const access = useAuthStore((s) => s.access) || "";
  const queryClient = useQueryClient();
  const ORDER_CACHE_KEY = getOrderCacheKey({status: 'S'})

  const { data: orders, isLoading, isError, error } = useGetOrders({
    access,
    status: "S",
  });

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_WS_ORDERS_URL);

    socket.onmessage = () => {
      queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
    };

    return () => socket.close();
  }, [queryClient]);

  if (isLoading) return <p>Loading ...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-4">
      {orders && orders.length === 0 ? (
        <div
          style={{ minHeight: "calc(100vh - 100px)" }}
          className="w-full flex justify-center items-center"
        >
          <h2 className="text-5xl font-bold font-poppins">No Orders Yet ...</h2>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-12">
          {orders?.map((order) => (
            <SimpleOrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default KitchenPage;
