import useGetOrders from "../../hooks/api/order/useGetOrders"
import useAuthStore from "../../hooks/store/useAuthStore"
import OrderCard from "./OrderCard"

interface Props {
    tableId: number
}

const Orders = ({ tableId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const {data: orders, isLoading, isError, error, isSuccess} = useGetOrders({ access, tableId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {orders.map( order => (
            <OrderCard 
                key={order.id}
                order={order}
            />
        ))}
    </div>
  )
}

export default Orders