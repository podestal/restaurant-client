import useGetCategories from "../../hooks/api/category/useGetCategories"

const Categories = () => {

    const { data: categories, isLoading, isError, error, isSuccess } = useGetCategories('')

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {categories.map( category => (
            <div key={category.id}>
                <p>{category.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Categories