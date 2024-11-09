import Categories from "../components/category/Categories"
import useGetCart from "../hooks/api/cart/useGetCart"

const MenuPage = () => {

    const {data: cart, isSuccess} = useGetCart()

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