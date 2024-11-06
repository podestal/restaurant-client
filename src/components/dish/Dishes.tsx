import useGetDishes from "../../hooks/api/dish/useGetDishes"
import DishCard from "./DishCard"

const Dishes = () => {

    const { data: dishes, isLoading, isError, error, isSuccess } = useGetDishes('')

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="col-span-5 grid grid-cols-3 gap-8">
        {dishes.map( dish => (
            <DishCard 
                key={dish.id}
                dish={dish}
            />
        ))}
    </div>
  )
}

export default Dishes