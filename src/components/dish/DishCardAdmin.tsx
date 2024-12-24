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
    <div className="flex justify-start items-start gap-6">
      <motion.div 
        onClick={() => setOpen(true)}
        layout
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col lg:grid lg:grid-cols-7 place-items-center gap-8 text-sm px-4 py-4 hover:bg-slate-200 dark:hover:bg-slate-900 cursor-pointer">
          <img src={dish.picture_url} alt={dish.picture_url} className="w-[200px] h-[100px] object-cover shadow-xl shadow-slate-500" />
          <p className="col-span-2 font-poppins font-bold">{dish.name}</p>
          <p className="col-span-2 dark:text-slate-300 text-slate-800 max-lg:hidden">{dish.description.length > 35 ? `${dish.description.slice(0, 35)} ...` : dish.description}</p>
          <div className="flex flex-col justify-center items-center max-lg:hidden gap-4">
            {dish.discount > 0 && <p className="font-poppins font-bold line-through dark:text-slate-400 text-slate-600">{dish.cost}</p>}
            <p className="font-poppins font-bold">{(dish.final_price).toFixed(2)}</p>
          </div>
          <p className={`shadow-xl ${dish.available ? 'text-green-700 bg-green-300 border-green-400 shadow-green-700' : 'text-red-700 bg-red-300 border-red-400 shadow-red-700'} text-center text-xs rounded-3xl py-2 border-2 w-full max-lg:w-[50%]`}>{dish.available ? 'Available' : 'Unavailable'}</p>
      </motion.div>
      <div className="h-full my-auto">
        <RemoveDish 
          dishId={dish.id}
        />
      </div>
      <UpdateDish 
        open={open}
        setOpen={setOpen}
        dish={dish}
      />
    </div>
  )
}

export default DishCardAdmin