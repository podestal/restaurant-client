import useGetCategories from "../../hooks/api/category/useGetCategories"
import CategoryCard from "./CategoryCard"

const Categories = () => {

    const { data: categories, isLoading, isError, error, isSuccess } = useGetCategories('')

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {categories.map( category => (
            <CategoryCard 
                key={category.id}
                category={category}
            />
        ))}
    </div>
  )
}

export default Categories