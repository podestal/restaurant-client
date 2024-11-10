import { Item } from "../../services/api/cartService";

interface Props {
    cartItems: Item[]
}

const CartItemsTotalCost = ({ cartItems }: Props) => {

    const totalCost = cartItems.reduce((accumulator, item) => {
        const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
        return accumulator += itemPrice
    }, 0)

  return (
    <div className="flex justify-between items-center pb-6 border-b-2">
        <h2 className="text-2xl">Total:</h2>
        <p className="text-2xl">{totalCost.toFixed(2)}</p>
    </div>
  )
}

export default CartItemsTotalCost