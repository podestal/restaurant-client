import { SimpleOrderItem } from "../../services/api/orderService"
import OrderItemsCard from "./OrderItemsCard"

interface Props {
    orderItems: SimpleOrderItem[]
    editable: boolean
    tableId: number
}

const OrderItems = ({ orderItems, editable, tableId }: Props) => {

  return (
    <div className={`my-6 ${!editable && 'bg-blue-700 rounded-xl py-4'}`}>
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