import { SimpleOrderItem } from "../../services/api/orderService"

interface Props {
    orderItem: SimpleOrderItem
}

const BillItemCard = ({ orderItem }: Props) => {
  return (
    <div 
        className="w-full flex justify-between items-start"
    >
        <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="w-full flex justify-start items-center gap-4">
                <p className="text-xs dark:text-slate-300">{orderItem.quantity}</p>
                <p className="font-poppins ">{orderItem.name}</p>
            </div>
            <p className="text-xs">c/u: {orderItem.cost}</p>
        </div>
        <p className="text-xs font-bold dark:text-slate-300">{(orderItem.cost * orderItem.quantity).toFixed(2)}</p>
    </div>
  )
}

export default BillItemCard