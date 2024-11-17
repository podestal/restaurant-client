import { SimpleOrderItem } from "../../services/api/orderService"
import RemoveOrderItem from "./RemoveOrderItem"

interface Props {
    orderItem: SimpleOrderItem
}

const OrderItemsCard = ({ orderItem }: Props) => {
  return (
    <div className="flex justify-center items-start">
        <RemoveOrderItem />
        <div className="w-full flex flex-col justify-start items-start gap-2 px-8 my-2">
            <div className="w-full flex justify-between items-center mx-auto">
                <p className="font-bold font-poppins">{orderItem.name}</p>
                <p>{orderItem.quantity}</p>
            </div>
            <p className="text-slate-400">- {orderItem.observations}</p>
        </div>
    </div>
  )
}

export default OrderItemsCard