import useGetCategories from "../../hooks/api/category/useGetCategories"
import Dishes from "../dish/Dishes"
import CategoryCard from "./CategoryCard"

const Categories = () => {

    const { data: categories, isLoading, isError, error, isSuccess } = useGetCategories('')

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="grid grid-cols-6 min-h-screen mt-10 gap-16">
        <div>
            {categories.map( category => (
                <CategoryCard 
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
        <Dishes 
            categories={categories}
        />
    </div>
  )
}

export default Categories