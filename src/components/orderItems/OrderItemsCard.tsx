import { SimpleOrderItem } from "../../services/api/orderService"
import RemoveOrderItem from "./RemoveOrderItem"
import { motion } from 'framer-motion'

interface Props {
    orderItem: SimpleOrderItem
    editable: boolean
    tableId: number
}

const OrderItemsCard = ({ orderItem, editable, tableId }: Props) => {
  return (
    <motion.div 
        layout
        className="flex justify-center items-start">
        {editable && 
        <RemoveOrderItem 
            orderItemId={orderItem.id}
            tableId={tableId}
        />}
        <div className="w-full flex flex-col justify-start items-start gap-2 px-8 my-2">
            <div className="w-full flex justify-between items-center mx-auto">
                <p className="font-bold font-poppins">{orderItem.name}</p>
                <p>{orderItem.quantity}</p>
            </div>
            <p className="text-slate-400">- {orderItem.observations}</p>
        </div>
    </motion.div>
  )
}

export default OrderItemsCard