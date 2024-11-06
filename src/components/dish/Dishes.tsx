import useGetDishes from "../../hooks/api/dish/useGetDishes"

const Dishes = () => {

    const { data: dishes, isLoading, isError, error, isSuccess } = useGetDishes('')

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="col-span-5 bg-red-200">
        {dishes.map( dish => (
            <div key={dish.id}>
                <p>{dish.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Dishes