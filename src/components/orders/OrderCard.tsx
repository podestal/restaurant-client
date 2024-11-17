import { Order } from "../../services/api/orderService"
import CreateOrderItem from "../orderItems/CreateOrderItem"
import OrderItems from "../orderItems/OrderItems"
import UpdateOrder from "./UpdateOrder"

interface Props {
    order: Order
    tableId: number
}

const OrderCard = ({ order, tableId }: Props) => {

    const orderItems = order.order_items || []
    const orderId = order.id

  return (
    <div>
        <div className="flex justify-between items-start mt-6">
            <p className="text-2xl font-poppins font-bold">Order # {orderId}</p>
            <UpdateOrder 
                tableId={tableId}
                order={order}
            />
        </div>
        {order.status === 'P' && 
        <CreateOrderItem 
            tableId={tableId}
            orderId={orderId}
        />}
        <OrderItems 
            orderItems={orderItems}
        />
    </div>
  )
}

export default OrderCard