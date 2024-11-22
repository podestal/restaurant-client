import useGetCategories from "../../hooks/api/category/useGetCategories"
import CategoryCardAdmin from "./CategoryCardAdmin"
import CreateCategory from "./CreateCategory"

const CategoreisAdmin = () => {

    const { data: categories, isLoading, isError, error, isSuccess } = useGetCategories()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {categories?.map( category => (
            <CategoryCardAdmin 
                key={category.id}
                category={category}
            />
        ))}
        <CreateCategory />
    </div>
  )
}

export default CategoreisAdmin