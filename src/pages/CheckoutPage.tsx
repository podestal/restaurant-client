import AnonymousUserForm from "../components/checkout/AnonymousUserForm"
import OrderTotal from "../components/checkout/OrderTotal"
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
        <div className="w-full grid grid-cols-3 h-full mt-24">
            <AnonymousUserForm 
              cartId={cart[0].id}
            />
            <OrderTotal />
        </div>
    </div>
  )
}

export default CheckoutPage