import { Item } from "../../services/api/cartService"
import Button from "../ui/Button"
import CartItemCard from "./CartItemCard"
import CartItemsTotalCost from "./CartItemsTotalCost"
import { useNavigate } from "react-router-dom"

interface Props {
    cartItems: Item[]
    cartId: number
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CartItems = ({ cartItems, cartId, setOpen }: Props) => {

    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate('checkout')
        setOpen(false)
    }

  return (
    <div>
        <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-palanquin font-semibold">My Order</h2>
            <div className="flex justify-end">
                <Button 
                    label="Checkout"
                    onClick={handleCheckout}
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