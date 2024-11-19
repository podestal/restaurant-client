import useRemoveOrder from "../../hooks/api/order/useRemoveOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import { Order } from "../../services/api/orderService"
import OrderItems from "../orderItems/OrderItems"
import { motion } from "framer-motion"

interface Props {
    order: Order
}

const SimpleOrderCard = ({ order }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const removeOrder = useRemoveOrder({ orderId: order.id, status: 'S' })

    const handleRemove = () => {
        removeOrder.mutate({ access })
    }

  return (
    <motion.div 
        layout
        onDoubleClick={handleRemove}
        className="w-full flex flex-col justify-start items-start gap-2 px-8 my-2">
        <OrderItems 
            orderItems={order.order_items}
            editable={false}
            tableId={0}
        />
    </motion.div>
  )
}

export default SimpleOrderCard