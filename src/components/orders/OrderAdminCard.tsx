import { RiIdCardFill } from "@remixicon/react"
import { Order } from "../../services/api/orderService"
import { motion } from "framer-motion"
import OrderType from "./OrderType"
import Modal from "../ui/Modal"
import { useState } from "react"
import RemoveOrderAdmin from "./RemoveOrderAdmin"
import OrderItemsCard from "../orderItems/OrderItemsCard"
import useLanguageStore from "../../hooks/store/useLanguageStore"

interface Props {
    order: Order
}

const orderStatusEn: Record<'P' | 'S' | 'C', string > = {
    'P': 'In process',
    'S': 'Serving',
    'C': 'Completed'
}

const orderStatusEs: Record<'P' | 'S' | 'C', string > = {
    'P': 'En Proceso',
    'S': 'Sirviendo',
    'C': 'Completado'
}

const orderTypeEn: Record<'I' | 'D' | 'T', string> = {
    'I': 'Dine in',
    'D': 'Deliver',
    'T': 'Take out'
}

const orderTypeEs: Record<'I' | 'D' | 'T', string> = {
    'I': 'Comer aquí',
    'D': 'Delivery',
    'T': 'Para llevar'
}

const OrderAdminCard = ({ order }: Props) => {

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const lan = useLanguageStore(s => s.lan)
    const status = lan === 'EN' ? orderStatusEn[order.status] : orderStatusEs[order.status] 
    const type = lan === 'EN' ? orderTypeEn[order.order_type] : orderTypeEs[order.order_type]
    const dishes = order.order_items.reduce((incrementer, orderItem) => {
        return incrementer += orderItem.quantity
    }, 0)

  return (
    <div className="w-full flex justify-start items-center gap-12">
        <motion.div 
            onClick={() => setOpen(true)}
            className="w-full grid grid-cols-6 gap-6 px-2 py-4 font-poppins text-left hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer">
            {loading 
            ? 
            <div className="w-full flex justify-center items-center col-span-6">
                <h2 className="text-xl animate-pulse">{lan === 'EN' ? "Removing Order ..." : 'Eliminando Orden'}</h2>
            </div> 
            : 
            <>
            <p className="flex items-center">{order.id}</p>
            <div className="w-full flex justify-start items-center gap-6">
                <OrderType 
                    orderType={order.order_type}
                    size={18}
                    color="blue-600"
                />
                <p>{type}</p>
            </div>
            <p className={`shadow-xl 
                ${order.status === 'C' && 'text-green-700 bg-green-300 border-green-400 shadow-green-700'} 
                ${order.status  === 'S' && 'text-amber-700 bg-amber-300 border-amber-400 shadow-amber-700'} 
                ${order.status  === 'P' && 'text-blue-700 bg-blue-300 border-blue-400 shadow-blue-700'} 
                text-center text-xs rounded-3xl py-2 border-2 w-[60%] max-lg:w-[50%]`}>{status}</p>
            <div className="col-span-2 flex w-full justify-start items-center gap-6">
                {order.waiter  && <RiIdCardFill size={18} className="text-blue-600"/>}
                <p>{order.waiter ? `${order.waiter }` : `${order.customer_name}`}</p>
            </div>
            <p className="flex items-center">{dishes}</p>
            </>
            }
        </motion.div>
        <RemoveOrderAdmin 
            orderId={order.id} 
            setLoading={setLoading}
        />
        <Modal 
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <div className="w-full flex flex-col items-center justify-start">
                <h2 className="font-bold text-2xl">Order {order.id}</h2>
                <div className="w-full mt-6">
                    {order.order_items.map( orderItem => (
                        <OrderItemsCard 
                            key={orderItem.id}
                            orderItem={orderItem}
                            tableId={0}
                            editable={false}
                        />
                    ))}
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default OrderAdminCard