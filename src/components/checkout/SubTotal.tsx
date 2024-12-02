import { useEffect } from "react"
import { Item } from "../../services/api/cartService"
import { getSubTotalCost } from "../../utils/utilities"

interface Props {
    cartItems: Item[]
    setTotalAmount: React.Dispatch<React.SetStateAction<number>>
    setSubTotal: React.Dispatch<React.SetStateAction<number>>
}

const SubTotal = ({ cartItems, setTotalAmount, setSubTotal }: Props) => {

    const subTotal = getSubTotalCost(cartItems)
    const taxes = 0.19 * subTotal
    const total = subTotal + taxes

    useEffect(() => {
        if (subTotal > 0) {
            const totalRounded = total.toFixed(2)
            const totalCents = parseFloat(totalRounded) * 100
            setTotalAmount(totalCents)
            setSubTotal(subTotal)
        }
    }, [])

  return (
    <div className="w-full grid grid-cols-3">
        <div className="flex flex-col justify-start items-start gap-4 col-span-2 font-bold font-palanquin">
            <p>Subtotal</p>
            <p>Total before tax</p>
            <p>Taxes</p>
            <p>Order Total</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
            <p>${subTotal.toFixed(2)}</p>
            <p>${subTotal.toFixed(2)}</p>
            <p>${(taxes).toFixed(2)}</p>
            <p className="font-bold">${total.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default SubTotal