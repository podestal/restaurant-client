import { useEffect } from "react"
import useGetOrders from "../../hooks/api/order/useGetOrders"
import useAuthStore from "../../hooks/store/useAuthStore"
import OrderCard from "./OrderCard"

interface Props {
    tableId: number
    setEnableCreateOrder: React.Dispatch<React.SetStateAction<boolean>>
    setAllowRemoveBill: React.Dispatch<React.SetStateAction<boolean>>
    billId: number
}

const Orders = ({ tableId, setEnableCreateOrder, setAllowRemoveBill, billId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const {data: orders, isLoading, isError, error, isSuccess} = useGetOrders({ access, tableId })

    useEffect(() => {
        if (orders) {
            console.log('orders',orders);
            
            orders.length === 0 ? setAllowRemoveBill(false) : setAllowRemoveBill(true)
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
    <div className="w-full">
        {orders.map( order => (
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