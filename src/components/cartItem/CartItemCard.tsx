import { Item } from "../../services/api/cartService"

interface Props {
    cartItem: Item
}

const CartItemCard = ({ cartItem }: Props) => {
  return (
    <div>{cartItem.name}</div>
  )
}

export default CartItemCard