import { Dish } from "../../services/api/dishService"
import RemoveDish from "./RemoveDish"
import { motion } from "framer-motion"

interface Props {
    dish: Dish
}

const DishCardAdmin = ({ dish }: Props) => {
  return (
    <motion.div 
      layout
      className="w-full grid grid-cols-8 gap-6 text-sm px-4 py-4 hover:bg-slate-200 dark:hover:bg-slate-900 cursor-pointer">
        <RemoveDish 
          dishId={dish.id}
        />
        <p>{dish.picture}</p>
        <p className="col-span-2 font-poppins font-bold">{dish.name}</p>
        <p className="col-span-2 dark:text-slate-300 text-slate-800">{dish.description}</p>
        <p>{dish.cost}</p>
        <p className={`${dish.available ? 'text-green-500' : 'text-red-500'} font-bold`}>{dish.available ? 'Available' : 'Unavailable'}</p>
    </motion.div>
  )
}

export default DishCardAdmin