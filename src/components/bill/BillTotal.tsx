import { SimpleOrderItem } from "../../services/api/orderService"

interface Props {
    orderItems: SimpleOrderItem[]
}

const BillTotal = ({ orderItems }: Props) => {

    const total =  orderItems.reduce((accumulator, orderItem) => {
        return accumulator += orderItem.cost * orderItem.quantity
    }, 0)

  return (
    <div className="w-full my-4 border-t-2 border-slate-4   00">
        <div className="w-full flex justify-between items-start pt-4">
            <p className="font-bold font-poppins text-lg">Total:</p>
            {total && <p>{total.toFixed(2)}</p>}
        </div>
    </div>
  )
}

export default BillTotal