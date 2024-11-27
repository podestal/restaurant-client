import { useState } from "react"
import useGetCart from "../../hooks/api/cart/useGetCart"
import useSessionIdStore from "../../hooks/store/useSessionIdStore"
import CartSlider from "../cart/CartSlider"
import Button from "../ui/Button"
import SubTotal from "./SubTotal"

const OrderTotal = () => {

    const [open, setOpen] = useState(false)
    const sessionId = useSessionIdStore(s => s.sessionId) || ''
    const {data: cart, isLoading, isError, error, isSuccess} = useGetCart({ sessionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        <div className="mb-6">
            <Button 
                label="Items"
                onClick={() => setOpen(true)}
            />
        </div>
        <SubTotal 
            cartItems={cart[0].items}
        />
        <CartSlider 
            isOpen={open}
            setOpen={setOpen}
            cart={cart[0]}
        />
    </div>
  )
}

export default OrderTotal