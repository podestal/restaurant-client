import Checkout from "../components/checkout/Checkout"
import CheckoutForm from "../components/ui/CheckoutForm"
import useGetCart from "../hooks/api/cart/useGetCart"
import useSessionIdStore from "../hooks/store/useSessionIdStore"
// import { PaymentElement } from "@stripe/react-stripe-js"

const CheckoutPage = () => {

    const sessionId = useSessionIdStore(s => s.sessionId) || ''
    const {data: cart, isLoading, isError, error, isSuccess} = useGetCart({ sessionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="2xl:max-w-[1280px] mx-auto">
      <Checkout 
        cart={cart[0]}
      />
      {/* <PaymentElement 
        
      /> */}
      <CheckoutForm amount={5000} /> 

    </div>
  )
}

export default CheckoutPage