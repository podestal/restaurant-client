import { Dish } from "../../services/api/dishService"

interface Props {
    dish: Dish
}

const DishCard = ({ dish }: Props) => {
  return (
    <div className="flex flex-col h-[200px] justify-start">
        <div className="grid grid-cols-4 mb-4">
            <h2 className="text-3xl font-semibold col-span-3 font-palanquin">{dish.name}</h2>
            <p className="font-bold my-auto">{dish.cost}</p>
        </div>
        <p className="text-xs dark:text-slate-400 text-slate-700">{dish.description}</p>
    </div>
  )
}

export default DishCard