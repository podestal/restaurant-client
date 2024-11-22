import { useState } from "react"
import useRemoveOrder from "../../hooks/api/order/useRemoveOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import { Order } from "../../services/api/orderService"
import OrderItems from "../orderItems/OrderItems"
import { motion } from "framer-motion"
import OrderTimer from "./OrderTimer"
import Modal from "../ui/Modal"
import Button from "../ui/Button"

interface Props {
    order: Order
}

const SimpleOrderCard = ({ order }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const removeOrder = useRemoveOrder({ orderId: order.id, status: 'S' })
    const [background, setBackground] = useState('bg-green-600')
    const [open, setOpen] = useState(false)

    const handleRemove = () => {
        removeOrder.mutate({ access })
    }

  return (
    <>
        <motion.div 
            layout
            onDoubleClick={() => setOpen(true)}
            className={`w-full flex flex-col justify-start items-start gap-2 px-8 my-2 ${background} rounded-xl py-4`}>
            <div className="w-full flex justify-center items-start mt-2 gap-12">
                {order.waiter && <h2 className="text-center text-4xl mb-4 font-poppins font-semibold">{order.waiter}</h2>}
                <OrderTimer 
                    order={order}
                    setBackground={setBackground}
                />
            </div>
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
        </Modal>
    </>
  )
}

export default SimpleOrderCard