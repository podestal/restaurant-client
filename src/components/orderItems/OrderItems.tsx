import { SimpleOrderItem } from "../../services/api/orderService"
import OrderItemsCard from "./OrderItemsCard"

interface Props {
    orderItems: SimpleOrderItem[]
    editable: boolean
    tableId: number
    waiter?: string
}

const OrderItems = ({ orderItems, editable, tableId, waiter }: Props) => {

  return (
    <div className={`my-6 w-full`}>
        {waiter && <h2 className="text-center text-2xl mb-4 font-poppins font-semibold">{waiter}</h2>}
        {orderItems.map( orderItem => (
            <OrderItemsCard 
                key={orderItem.id}
                orderItem={orderItem}
                editable={editable}
                tableId={tableId}
            />
        ))}
    </div>
  )
}

export default OrderItems