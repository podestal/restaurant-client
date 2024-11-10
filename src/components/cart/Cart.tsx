import { RiShoppingBagFill } from "@remixicon/react"
import { useState } from "react"
import CartSlider from "./CartSlider"
import useSessionIdStore from "../../hooks/store/useSessionIdStore"
import useGetCart from "../../hooks/api/cart/useGetCart"
import CartItemsCount from "./CartItemsCount"

const Cart = () => {

    const [open, setOpen] = useState(false)
    const sessionId = useSessionIdStore(s => s.sessionId) || ''
    const {data: cart, isLoading, isError, error, isSuccess} = useGetCart({ sessionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

  return isSuccess ? (
    <div className=" relative">
        <RiShoppingBagFill 
            size={32}
            className="text-blue-700 hover:text-blue-600 cursor-pointer"
            onClick={() => setOpen(true)}
        />
        <CartItemsCount 
            setOpen={setOpen}
            items={cart[0].items}
        />
        <CartSlider 
            isOpen={open}
            setOpen={setOpen}
            cart={cart[0]}
        />
    </div>
  ) : null
}

export default Cart