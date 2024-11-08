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
    <div className="grid grid-cols-6 min-h-screen mt-10 gap-16 relative">
        <div className="fixed">
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