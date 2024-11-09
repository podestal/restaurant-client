import { RiShoppingBagFill } from "@remixicon/react"
import { useState } from "react"
import CartSlider from "./CartSlider"
import useSessionIdStore from "../../hooks/store/useSessionIdStore"
import useGetCart from "../../hooks/api/cart/useGetCart"

const Cart = () => {

    const [open, setOpen] = useState(false)
    const sessionId = useSessionIdStore(s => s.sessionId) || ''
    const {data: cart, isLoading, isError, error, isSuccess} = useGetCart({ sessionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className=" relative">
        <RiShoppingBagFill 
            size={40}
            className="text-blue-600 hover:text-blue-500 cursor-pointer"
            onClick={() => setOpen(true)}
        />
        <div className="rounded-full bg-white font-bold text-blue-600 flex justify-center items-center text-xs absolute top-6 right-1 px-1 py-0 cursor-pointer">{cart[0].items.length}</div>
        <CartSlider 
            isOpen={open}
            onClose={() => setOpen(false)}
            cart={cart[0]}
        />
    </div>
  )
}

export default Cart