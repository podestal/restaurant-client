import { SimpleOrderItem } from "../../services/api/orderService"
import OrderItemsCard from "./OrderItemsCard"

interface Props {
    orderItems: SimpleOrderItem[]
}

const OrderItems = ({ orderItems }: Props) => {

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