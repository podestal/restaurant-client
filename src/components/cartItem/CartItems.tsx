import { Item } from "../../services/api/cartService"
import CartItemCard from "./CartItemCard"

interface Props {
    cartItems: Item[]
    cartId: number
}

const CartItems = ({ cartItems, cartId }: Props) => {

  return (
    <div>
        <h2 className="text-4xl font-palanquin font-semibold mb-10">My Order</h2>
        {cartItems.map( cartItem => (
            <CartItemCard 
                key={cartItem.id}
                cartItem={cartItem}
                cartId={cartId}
            />
        ))}
    </div>
  )
}

export default CartItems