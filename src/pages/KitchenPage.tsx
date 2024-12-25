import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import SimpleOrderCard from "../components/orders/SimpleOrderCard";
import useGetOrders from "../hooks/api/order/useGetOrders";
import useAuthStore from "../hooks/store/useAuthStore";
import { getOrderCacheKey } from "../utils/keys";
import useLoader from "../hooks/ui/useLoader";
import { motion } from 'framer-motion'
import useLanguageStore from "../hooks/store/useLanguageStore";

const KitchenPage = () => {
  const access = useAuthStore((s) => s.access) || "";
  const queryClient = useQueryClient();
  const ORDER_CACHE_KEY = getOrderCacheKey({status: 'S'})
  const lan = useLanguageStore(s => s.lan)

  const { data: orders, isLoading, isError, error } = useGetOrders({
    access,
    status: "S",
  });

  useLoader(isLoading)

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_WS_ORDERS_URL);

    socket.onmessage = () => {
      queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
    };

    return () => socket.close();
  }, [queryClient]);

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-20">
      {orders && orders.length === 0 ? (
        <div
          style={{ minHeight: "calc(100vh - 100px)" }}
          className="w-full flex justify-center items-center"
        >
          <h2 className="text-5xl font-bold font-poppins">
            {lan === 'EN' ? 'No orders yet ...' : 'Sin órdenes aún ...'}
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-12">
          {orders?.map((order) => (
            <SimpleOrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default KitchenPage;
