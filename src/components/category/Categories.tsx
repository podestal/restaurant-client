import useGetCategories from "../../hooks/api/category/useGetCategories"
import { Cart } from "../../services/api/cartService"
import Dishes from "../dish/Dishes"
import CategoryCard from "./CategoryCard"

interface Props {
    cart: Cart
}

const Categories = ({ cart }: Props) => {

    const { data: categories, isLoading, isError, error, isSuccess } = useGetCategories()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="w-full lg:grid lg:grid-cols-6 min-h-screen lg:mt-10 gap-16 relative lg:mx-0">
        <div className="w-full fixed max-lg:top-0 max-lg:left-0 max-lg:flex max-lg:justify-start max-lg:items-center max-lg:gap-6 overflow-scroll max-lg:backdrop-blur-md max-lg:px-4 max-lg:py-6">
            {categories.map( category => (
                <CategoryCard 
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
        <div></div>
        <Dishes 
            categories={categories}
            cart={cart}
        />
    </div>
  )
}

export default Categories