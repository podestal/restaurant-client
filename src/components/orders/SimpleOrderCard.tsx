import { useState } from "react"
import useAuthStore from "../../hooks/store/useAuthStore"
import { Order } from "../../services/api/orderService"
import OrderItems from "../orderItems/OrderItems"
import { motion } from "framer-motion"
import OrderTimer from "./OrderTimer"
import Modal from "../ui/Modal"
import Button from "../ui/Button"
import useUpdateOrder from "../../hooks/api/order/useUpdateOrder"
import OrderType from "./OrderType"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

interface Props {
    order: Order
}

const SimpleOrderCard = ({ order }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const [background, setBackground] = useState('bg-green-600')
    const { setShow, setType, setMessage } = useNotificationsStore()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const updateOrder = useUpdateOrder({ orderId: order.id, status: 'S', email: order.customer_email })

    const handleRemove = () => {
        const table = order.table ? order.table : null
        setLoading(true)
        updateOrder.mutate({updates: {...order, table, status: 'C'}, access }, {
            onError: error => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${error.message}`)
            },
            onSettled: () => {
                setLoading(false)
                setOpen(false)
            }
        })
    }

  return (
    <>
        <motion.div 
            layout
            onDoubleClick={() => setOpen(true)}
            className={`w-full flex flex-col justify-start items-start gap-2 px-8 my-2 ${background} rounded-xl py-4 text-slate-50`}>
            <>{console.log('order', order)}</>
            <div className="w-full flex justify-center items-start mt-2 gap-12">
                <OrderType 
                    orderType={order.order_type}
                />
                <h2 className="text-center text-4xl mb-4 font-poppins font-semibold">{order.waiter ? order.waiter : order.customer_name}</h2>
            </div>
            <OrderTimer 
                order={order}
                setBackground={setBackground}
            />
            <>{console.log('order kitchen', order)}</>
            <OrderItems 
                orderItems={order.order_items}
                editable={false}
                tableId={0}
            />
        </motion.div>
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            {loading 
            ? 
            <div className="w-full flex justify-center items-center p-6">
                <h2 className="text-3xl font-bold animate-pulse">Completing Order ...</h2>
            </div> 
            : 
            <div className="w-full flex flex-col justify-start items-center gap-10">
                <h2 className="text-3xl font-bold font-poppins">Are you sure?</h2>
                <div className="w-full flex justify-evenly items-center">
                    <Button 
                        label="Yes"
                        color="red"
                        onClick={handleRemove}
                    />
                    <Button 
                        label="No"
                        onClick={() => setOpen(false)}
                    />
                </div>
            </div>
            }
        </Modal>
    </>
  )
}

export default SimpleOrderCard