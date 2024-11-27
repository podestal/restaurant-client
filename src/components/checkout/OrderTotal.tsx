import { useState } from "react"
import useGetCart from "../../hooks/api/cart/useGetCart"
import useSessionIdStore from "../../hooks/store/useSessionIdStore"
import CartSlider from "../cart/CartSlider"
import Button from "../ui/Button"

const OrderTotal = () => {

    const [open, setOpen] = useState(false)
    const sessionId = useSessionIdStore(s => s.sessionId) || ''
    const {data: cart, isLoading, isError, error, isSuccess} = useGetCart({ sessionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {/* <div>
            <p onClick={() => setOpen(true)} className="mb-6 font-bold font-palanquin text-xl cursor-pointer">Items {'>'}</p>
        </div> */}
        <div className="mb-6">
            <Button 
                label="Items"
                onClick={() => setOpen(true)}
            />
        </div>
        <div className="w-full grid grid-cols-3">
            <div className="flex flex-col justify-start items-start gap-4 col-span-2 font-bold font-palanquin">
                <p>Subtotal</p>
                <p>Total before tax</p>
                <p>Taxes</p>
                <p>Order Total</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
                <p>$21.38</p>
                <p>$21.38</p>
                <p>$1.42</p>
                <p className="font-bold">$22.80</p>
            </div>
        </div>
        <CartSlider 
            isOpen={open}
            setOpen={setOpen}
            cart={cart[0]}
        />
    </div>
  )
}

export default OrderTotal