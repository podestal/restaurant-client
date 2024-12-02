import Checkout from "../components/checkout/Checkout"
import useGetCart from "../hooks/api/cart/useGetCart"
import useSessionIdStore from "../hooks/store/useSessionIdStore"

const CheckoutPage = () => {

    const sessionId = useSessionIdStore(s => s.sessionId) || ''
    const {data: cart, isLoading, isError, error, isSuccess} = useGetCart({ sessionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <>
      <Checkout 
        cart={cart[0]}
      />
    </>
  )
}

export default CheckoutPage