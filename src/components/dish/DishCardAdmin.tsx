import { Dish } from "../../services/api/dishService"
import RemoveDish from "./RemoveDish"
import { motion } from "framer-motion"
import UpdateDish from "./UpdateDish"
import { useState } from "react"

interface Props {
    dish: Dish
}

const DishCardAdmin = ({ dish }: Props) => {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-start items-center gap-4">
      <motion.div 
        onClick={() => setOpen(true)}
        layout
        className="w-full grid grid-cols-7 gap-6 text-sm px-4 py-4 hover:bg-slate-200 dark:hover:bg-slate-900 cursor-pointer">
          <p>{dish.picture}</p>
          <p className="col-span-2 font-poppins font-bold">{dish.name}</p>
          <p className="col-span-2 dark:text-slate-300 text-slate-800">{dish.description.length > 35 ? `${dish.description.slice(0, 35)} ...` : dish.description}</p>
          <p>{dish.cost}</p>
          <p className={`${dish.available ? 'text-green-700 bg-green-300 border-green-400' : 'text-red-700 bg-red-300 border-red-400'} text-center text-xs rounded-3xl py-2 border-2`}>{dish.available ? 'Available' : 'Unavailable'}</p>
      </motion.div>
      <RemoveDish 
        dishId={dish.id}
      />
      <UpdateDish 
        open={open}
        setOpen={setOpen}
        dish={dish}
      />
    </div>
  )
}

export default DishCardAdmin