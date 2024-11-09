import { useEffect } from "react"
import Categories from "../components/category/Categories"
import useGetCart from "../hooks/api/cart/useGetCart"
import useSessionIdStore from "../hooks/store/useSessionIdStore"

const MenuPage = () => {

    const {sessionId, saveSessionId} = useSessionIdStore()
    const {data: cart, isSuccess} = useGetCart({ sessionId: sessionId || '' })

    useEffect(() => {
        if (!sessionId && cart) {
            saveSessionId(cart[0].session_id)
        }
    }, [cart])

    if (isSuccess)
  return (
    <div className="2xl:max-w-[1280px] mx-auto relative">
        <Categories 
            cart={cart[0]}
        />
    </div>
  )
}

export default MenuPage