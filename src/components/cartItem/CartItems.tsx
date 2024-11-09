import { Item } from "../../services/api/cartService"
import CartItemCard from "./CartItemCard"

interface Props {
    cartItems: Item[]
}

const CartItems = ({ cartItems }: Props) => {
  return (
    <>{cartItems.map( cartItem => (
        <CartItemCard 
            key={cartItem.id}
            cartItem={cartItem}
        />
    ))}</>
  )
}

export default CartItems