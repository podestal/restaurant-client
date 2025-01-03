import { useEffect } from "react"
import useGetOrders from "../../hooks/api/order/useGetOrders"
import useAuthStore from "../../hooks/store/useAuthStore"
import OrderCard from "./OrderCard"
import { useQueryClient } from "@tanstack/react-query"
import { getOrderCacheKey } from "../../utils/keys"

interface Props {
    tableId: number
    setEnableCreateOrder: React.Dispatch<React.SetStateAction<boolean>>
    setAllowRemoveBill: React.Dispatch<React.SetStateAction<boolean>>
    billId: number
}

const Orders = ({ tableId, setEnableCreateOrder, setAllowRemoveBill, billId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const {data: orders, isLoading, isError, error, isSuccess} = useGetOrders({ access, tableId })
    const ORDER_CACHE_KEY = getOrderCacheKey({ tableId })
    const queryClient = useQueryClient()

    useEffect(() => {
        const socket = new WebSocket(import.meta.env.VITE_WS_ORDERS_URL);
    
        socket.onmessage = () => {
          queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
        };
    
        return () => socket.close();
      }, [queryClient]);

    useEffect(() => {
        if (orders) {
            
            orders.map( order => {
                if (order.status === 'S' || order.status === 'P') {
                    setAllowRemoveBill(true)
                    return 
                }
            })
            orders.forEach(order => {
                if (order.status === 'P') {
                    setEnableCreateOrder(false)
                }
            })
        }
    }, [orders])

    if (isLoading) return <p className="animate-pulse">Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="w-full">
        {orders
        .filter( order => order.status === 'P' || order.status === 'S')
        .map( order => (
            <OrderCard 
                key={order.id}
                order={order}
                tableId={tableId}
                setEnableCreateOrder={setEnableCreateOrder}
                billId={billId}
            />
        ))}
    </div> 
  )
}

export default Orders