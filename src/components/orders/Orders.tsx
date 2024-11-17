import { useEffect } from "react"
import useGetOrders from "../../hooks/api/order/useGetOrders"
import useAuthStore from "../../hooks/store/useAuthStore"
import OrderCard from "./OrderCard"

interface Props {
    tableId: number
    setEnableCreateOrder: React.Dispatch<React.SetStateAction<boolean>>
}

const Orders = ({ tableId, setEnableCreateOrder }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const {data: orders, isLoading, isError, error, isSuccess} = useGetOrders({ access, tableId })

    useEffect(() => {
        if (orders) {
            orders.forEach(order => {
                if (order.status === 'P') {
                    setEnableCreateOrder(false)
                }
            })
        }
    }, [orders])

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {orders.map( order => (
            <OrderCard 
                key={order.id}
                order={order}
                tableId={tableId}
                setEnableCreateOrder={setEnableCreateOrder}
            />
        ))}
    </div> 
  )
}

export default Orders