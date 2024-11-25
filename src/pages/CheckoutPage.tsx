import CreateOrder from "../components/orders/CreateOrder"
import useGetCart from "../hooks/api/cart/useGetCart"
import useSessionIdStore from "../hooks/store/useSessionIdStore"

const CheckoutPage = () => {

    const sessionId = useSessionIdStore(s => s.sessionId) || ''
    const {data: cart, isLoading, isError, error, isSuccess} = useGetCart({ sessionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="2xl:max-w-[1280px] mx-auto">
        <>{console.log('cart', cart)}</>
        <h2 className="mt-10 text-4xl">Checkout ...</h2>
        <CreateOrder
          orderType="T" 
        />
    </div>
  )
}

export default CheckoutPage