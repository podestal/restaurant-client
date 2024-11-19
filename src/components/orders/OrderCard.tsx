import { Order } from "../../services/api/orderService"
import CreateOrderItem from "../orderItems/CreateOrderItem"
import OrderItems from "../orderItems/OrderItems"
import UpdateOrder from "./UpdateOrder"

interface Props {
    order: Order
    tableId: number
    setEnableCreateOrder: React.Dispatch<React.SetStateAction<boolean>>
    billId: number
}

const OrderCard = ({ order, tableId, setEnableCreateOrder, billId }: Props) => {

    const orderItems = order.order_items || []
    const orderId = order.id
    const editable = order.status === 'P' ? true : false

  return (
    <div className={`${!editable && 'bg-blue-700 rounded-xl py-4'}`}>
        <div className={`flex ${editable ? ' justify-between' : ' justify-center'} items-start mt-6`}>
            <p className="text-2xl font-poppins font-bold">Order # {orderId}</p>
            {editable && 
            <UpdateOrder 
                tableId={tableId}
                order={order}
                setEnableCreateOrder={setEnableCreateOrder}
            />}
        </div>
        {editable && 
        <CreateOrderItem 
            tableId={tableId}
            orderId={orderId}
            billId={billId}
        />}
        <OrderItems 
            orderItems={orderItems}
            editable={editable}
            tableId={tableId}
        />
    </div>
  )
}

export default OrderCard