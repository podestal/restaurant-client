import { useState } from "react"
import { Dish } from "../../services/api/dishService"
import ItemCounter from "../cart/ItemCounter"
import { motion } from 'framer-motion'
import { Cart } from "../../services/api/cartService"
import CreateCartItem from "../cartItem/CreateCartItem"

interface Props {
    dish: Dish
    cart: Cart
}

const DishCard = ({ dish, cart }: Props) => {

    const [count, setCount] = useState(0)

  return (
    <motion.div 
        // viewport={{ margin: '-50%' }}
        className="flex flex-col max-md:mx-6 h-[360px] justify-start border-2 border-slate-200 dark:border-slate-900 px-4 pb-2 rounded-2xl shadow-xl shadow-slate-700 dark:shadow-slate-700">
        <img src={dish.picture_url} alt={dish.picture_url} className="w-full h-[160px] object-cover mb-4" />
        <div className="grid grid-cols-4 mb-4">
            <h2 className="text-3xl font-semibold col-span-3 font-palanquin">{dish.name}</h2>
            <p className="font-bold my-auto">{dish.cost}</p>
        </div>
        <p className="text-xs dark:text-slate-400 text-slate-700">{dish.description}</p>
        <div className="w-full flex justify-between items-center my-6 mx-auto max-lg:my-10">
            <CreateCartItem 
                cart={cart}
                dish={dish}
                count={count}
                setCount={setCount}
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