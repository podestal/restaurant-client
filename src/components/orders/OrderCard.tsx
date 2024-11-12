import { Order } from "../../services/api/orderService"
import OrderItems from "../orderItems/OrderItems"

interface Props {
    order: Order
}

const OrderCard = ({ order }: Props) => {
  return (
    <div>
        <p>Order # {order.id}</p>
        <OrderItems 
            orderId={order.id}
        />
    </div>
  )
}

export default OrderCard