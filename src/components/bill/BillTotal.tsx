import { SimpleOrderItem } from "../../services/api/orderService"

interface Props {
    orderItems: SimpleOrderItem[]
}

const BillTotal = ({ orderItems }: Props) => {


    const subTotal =  orderItems.reduce((accumulator, orderItem) => {
        return accumulator += orderItem.cost * orderItem.quantity
    }, 0)
    const taxes = (subTotal * 0.18).toFixed(2)
    const total = (subTotal * 1.18).toFixed(2)

  return (
    <div className="w-full my-4 border-t-2 border-slate-4">
        <div className="w-full flex flex-col justify-between items-start pt-4 gap-3">
            <div className="w-full flex justify-between">
                <p className="font-bold font-poppins text-lg">Sub Total:</p>
                {subTotal && <p>{subTotal.toFixed(2)}</p>}
            </div>
            <div className="w-full flex justify-between">
                <p className="font-bold font-poppins text-lg">Taxes:</p>
                {taxes && <p>{taxes}</p>}
            </div>
            <div className="w-full flex justify-between"> 
                <p className="font-bold font-poppins text-lg">Total:</p>
                {total && <p className="font-bold">{total}</p>}
            </div>
        </div>
    </div>
  )
}

export default BillTotal