import { RiIdCardFill } from "@remixicon/react"
import { Order } from "../../services/api/orderService"
import { motion } from "framer-motion"

interface Props {
    order: Order
}

const orderStatus: Record<'P' | 'S' | 'C', string > = {
    'P': 'In process',
    'S': 'Serving',
    'C': 'Completed'
}

const orderType: Record<'I' | 'D' | 'T', string> = {
    'I': 'Dine in',
    'D': 'Deliver',
    'T': 'Take out'
}

const OrderAdminCard = ({ order }: Props) => {

    const status = orderStatus[order.status]
    const dishes = order.order_items.reduce((incrementer, orderItem) => {
        return incrementer += orderItem.quantity
    }, 0)

  return (
    <motion.div className="w-full grid grid-cols-6 px-2 py-4 font-palanquin text-left hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer">
        <p>{order.id}</p>
        <p>{orderType[order.order_type]}</p>
        <p className={`shadow-xl 
            ${order.status === 'C' && 'text-green-700 bg-green-300 border-green-400 shadow-green-700'} 
            ${order.status  === 'S' && 'text-amber-700 bg-amber-300 border-amber-400 shadow-amber-700'} 
            ${order.status  === 'P' && 'text-blue-700 bg-blue-300 border-blue-400 shadow-blue-700'} 
            text-center text-xs rounded-3xl py-2 border-2 w-[60%] max-lg:w-[50%]`}>{status}</p>
        <div className="col-span-2 flex w-full justify-start items-center gap-6">
            <p>{order.waiter ? `${order.waiter }` : `${order.customer_name}`}</p>
            {order.waiter  && <RiIdCardFill size={18} className="text-blue-600"/>}
        </div>
        <p>{dishes}</p>
    </motion.div>
  )
}

export default OrderAdminCard