import { Order } from "../../services/api/orderService"
import CreateOrderItem from "../orderItems/CreateOrderItem"
import OrderItems from "../orderItems/OrderItems"

interface Props {
    order: Order
    tableId: number
}

const OrderCard = ({ order, tableId }: Props) => {

    const orderItems = order.order_items || []
    const orderId = order.id

  return (
    <div>
        <p>Order # {orderId}</p>
        <CreateOrderItem 
            tableId={tableId}
            orderId={orderId}
        />
        <OrderItems 
            orderItems={orderItems}
        />
    </div>
  )
}

export default OrderCard