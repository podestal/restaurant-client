import Categories from "../components/category/Categories"
import Dishes from "../components/dish/Dishes"

const MenuPage = () => {
  return (
    <div className="2xl:max-w-[1280px] mx-auto grid grid-cols-6">
        <Categories />
        <Dishes />
    </div>
  )
}

export default MenuPage