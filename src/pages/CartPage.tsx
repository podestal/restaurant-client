import useGetCart from "../hooks/api/cart/useGetCart"
import useSessionIdStore from "../hooks/store/useSessionIdStore"

const CartPage = () => {

    const sessionId = useSessionIdStore(s => s.sessionId) || ''
    const {data: cart, isLoading, isError, error, isSuccess} = useGetCart({ sessionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="2xl:max-w-[1280px] mx-auto relative">
        {cart[0].items.map( item => (
            <p>{item.name}</p>
        ))}
    </div>
  )
}

export default CartPage