import { Item } from "../../services/api/cartService"

interface Props {
    cartItem: Item
}

const CartItemCard = ({ cartItem }: Props) => {
  return (
    <div className="grid grid-cols-6 gap-2 my-6">
        <p>{cartItem.quantity}</p>
        <div className="col-span-4">
            <p className="text-xl font-palanquin">{cartItem.name}</p>
            <p>Observations</p>
        </div>
        <p className="text-right">{cartItem.price}</p>
    </div>
  )
}

export default CartItemCard