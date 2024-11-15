import { Order } from "../../services/api/orderService"
import CreateOrderItem from "../orderItems/CreateOrderItem"
import OrderItems from "../orderItems/OrderItems"

interface Props {
    order: Order
    tableId: number
}

const OrderCard = ({ order, tableId }: Props) => {

    const orderItems = order.order_items || []

  return (
    <div>
        <p>Order # {order.id}</p>
        <CreateOrderItem 
            orderId={order.id}
            tableId={tableId}
        />
        <OrderItems 
            orderItems={orderItems}
        />
    </div>
  )
}

export default OrderCard