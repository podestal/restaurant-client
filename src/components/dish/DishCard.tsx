import { RiShoppingCart2Fill } from "@remixicon/react"
import { Dish } from "../../services/api/dishService"

interface Props {
    dish: Dish
}

const DishCard = ({ dish }: Props) => {
  return (
    <div className="flex flex-col h-[200px] justify-end border-2 border-slate-200 dark:border-slate-900 px-4 pb-2 rounded-2xl shadow-xl shadow-slate-700 dark:shadow-blue-700">
        <div className="grid grid-cols-4 mb-4">
            <h2 className="text-3xl font-semibold col-span-3 font-palanquin">{dish.name}</h2>
            <p className="font-bold my-auto">{dish.cost}</p>
        </div>
        <p className="text-xs dark:text-slate-400 text-slate-700">{dish.description}</p>
        <RiShoppingCart2Fill className="my-6 text-blue-600 hover:text-blue-700 cursor-pointer"/>
    </div>
  )
}

export default DishCard