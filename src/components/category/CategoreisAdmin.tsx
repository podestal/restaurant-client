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
        <CreateCategory />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12 mt-12">
            {categories?.map( category => (
                <CategoryCardAdmin 
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    </div>
  )
}

export default CategoreisAdmin