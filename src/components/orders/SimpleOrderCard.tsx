import { useState } from "react"
import useRemoveOrder from "../../hooks/api/order/useRemoveOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import { Order } from "../../services/api/orderService"
import OrderItems from "../orderItems/OrderItems"
import { motion } from "framer-motion"
import OrderTimer from "./OrderTimer"

interface Props {
    order: Order
}

const SimpleOrderCard = ({ order }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const removeOrder = useRemoveOrder({ orderId: order.id, status: 'S' })
    const [background, setBackground] = useState('bg-green-600')

    const handleRemove = () => {
        removeOrder.mutate({ access })
    }

  return (
    <motion.div 
        layout
        onDoubleClick={handleRemove}
        className={`w-full flex flex-col justify-start items-start gap-2 px-8 my-2 ${background} rounded-xl py-4`}>
        <OrderTimer 
            order={order}
            setBackground={setBackground}
        />
        <OrderItems 
            orderItems={order.order_items}
            editable={false}
            tableId={0}
            waiter={order.waiter}
        />
    </motion.div>
  )
}

export default SimpleOrderCard