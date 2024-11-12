import useGetOrderItems from "../../hooks/api/orderItem/useGetOrderItems"
import useAuthStore from "../../hooks/store/useAuthStore"
import OrderItemsCard from "./OrderItemsCard"

interface Props {
    orderId: number
}

const OrderItems = ({ orderId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const { data: orderItems, isLoading, isError, error, isSuccess } = useGetOrderItems({ orderId, access })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {orderItems.map( orderItem => (
            <OrderItemsCard 
                key={orderItem.id}
                orderItem={orderItem}
            />
        ))}
    </div>
  )
}

export default OrderItems