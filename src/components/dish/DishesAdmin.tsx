import useGetDishes from "../../hooks/api/dish/useGetDishes"
import CreateDish from "./CreateDish"
import DishCardAdmin from "./DishCardAdmin"

const DishesAdmin = () => {

    const {data: dishes, isLoading, isError, error, isSuccess} = useGetDishes()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="w-full mt-10 py-10">
        <CreateDish />
        <div className="w-full grid grid-cols-7 gap-6 text-md font-bold mb-6 dark:bg-slate-900 bg-slate-200 p-4">
            <p>Image</p>
            <p className="col-span-2">Name</p>
            <p className="col-span-2">Description</p>
            <p>Cost</p>
            <p>Status</p>
        </div>
        <div className="flex flex-col gap-2">
            {dishes.map(dish => (
                <DishCardAdmin 
                    key={dish.id}
                    dish={dish}
                />
            ))}
        </div>
    </div>

  )
}

export default DishesAdmin