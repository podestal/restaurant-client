import useGetDishes from "../../hooks/api/dish/useGetDishes"
import { Category } from "../../services/api/categoryService"
import DishCard from "./DishCard"

interface Props {
    categories: Category[]
}

const Dishes = ({ categories }: Props) => {

    const { data: dishes, isLoading, isError, error, isSuccess } = useGetDishes('')

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="col-span-5 ">
        {categories.map( category => (
            <div>
                <div className="mb-10 flex flex-col justify-start items-start gap-4">
                    <h2 className="text-4xl font-bold font-poppins">{category.name}</h2>
                    <p>{category.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {dishes
                        .filter( dish => dish.category === category.id)
                        .map( dish => (
                        <DishCard 
                            key={dish.id}
                            dish={dish}
                        />
                    ))}
                </div>
            </div>
        ))}

    </div>
  )
}

export default Dishes