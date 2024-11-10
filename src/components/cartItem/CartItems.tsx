import { Item } from "../../services/api/cartService"
import Button from "../ui/Button"
import CartItemCard from "./CartItemCard"
import CartItemsTotalCost from "./CartItemsTotalCost"

interface Props {
    cartItems: Item[]
    cartId: number
}

const CartItems = ({ cartItems, cartId }: Props) => {

  return (
    <div>
        <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-palanquin font-semibold">My Order</h2>
            <div className="flex justify-end">
                <Button 
                    label="Checkout"
                />
            </div>
        </div>
        <CartItemsTotalCost 
            cartItems={cartItems}
        />
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