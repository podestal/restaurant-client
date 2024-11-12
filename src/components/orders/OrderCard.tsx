import { Order } from "../../services/api/orderService"
import OrderItems from "../orderItems/OrderItems"

interface Props {
    order: Order
}

const OrderCard = ({ order }: Props) => {

    const orderItems = order.order_items || []

  return (
    <div>
        <p>Order # {order.id}</p>
        <OrderItems 
            orderItems={orderItems}
        />
    </div>
  )
}

export default OrderCard