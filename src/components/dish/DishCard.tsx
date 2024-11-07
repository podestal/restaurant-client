import { useState } from "react"
import { Dish } from "../../services/api/dishService"
import Button from "../ui/Button"
import ItemCounter from "../cart/ItemCounter"
import { motion } from 'framer-motion'

interface Props {
    dish: Dish
}

const DishCard = ({ dish }: Props) => {

    const [count, setCount] = useState(0)

  return (
    <motion.div 
        whileHover={{ scale: 1.02 }}
        // viewport={{ margin: '-50%' }}
        className="flex flex-col h-[300px] justify-end border-2 border-slate-200 dark:border-slate-900 px-4 pb-2 rounded-2xl shadow-xl shadow-slate-700 dark:shadow-slate-700">
        <div className="w-full h-[200px]">
            
        </div>
        <div className="grid grid-cols-4 mb-4">
            <h2 className="text-3xl font-semibold col-span-3 font-palanquin">{dish.name}</h2>
            <p className="font-bold my-auto">{dish.cost}</p>
        </div>
        <p className="text-xs dark:text-slate-400 text-slate-700">{dish.description}</p>
        <div className="flex justify-between items-center my-6">
            <Button 
                label="Add"
            />
            <ItemCounter 
                counter={count}
                setCounter={setCount}
            />
        </div>
    </motion.div>
  )
}

export default DishCard