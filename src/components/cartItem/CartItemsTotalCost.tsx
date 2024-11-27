import { Item } from "../../services/api/cartService";
import { getSubTotalCost } from "../../utils/utilities";

interface Props {
    cartItems: Item[]
}

const CartItemsTotalCost = ({ cartItems }: Props) => {

    const totalCost = getSubTotalCost(cartItems)

  return (
    <div className="flex justify-between items-center pb-6 border-b-2">
        <h2 className="text-2xl">Total:</h2>
        <p className="text-2xl">{totalCost.toFixed(2)}</p>
    </div>
  )
}

export default CartItemsTotalCost