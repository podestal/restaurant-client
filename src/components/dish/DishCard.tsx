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
        className="flex flex-col max-md:mx-6 justify-start border-2 border-slate-200 dark:border-slate-900 px-4 rounded-2xl shadow-xl shadow-slate-700 dark:shadow-slate-700">
        <div className="relative mb-4">
        {dish.discount && <div className="absolute top-0 left-0 w-full h-full">
            <span className="absolute -top-0 left-3 w-14 h-10 bg-green-500 flex justify-center items-center">
                <p className="text-sm font-bold font-poppins text-slate-50">Offer</p>
            </span>
        </div>}
        <img src={dish.picture_url} alt={dish.picture_url} className="w-full h-[160px] object-cover " />
        </div>

        <div className="flex justify-between items-start mb-4 md:h-[80px] gap-6">
            <h2 className="text-3xl font-semibold font-palanquin">{dish.name}</h2>
            <div>
                {dish.discount && <p className="font-bold mt-2 line-through dark:text-slate-400 text-slate-600">$.{dish.cost}</p>}
                <p className="font-bold mt-2">$.{(dish.final_price).toFixed(2)}</p>
            </div>
        </div>
        <p className="text-xs dark:text-slate-400 text-slate-700">{dish.description}</p>
        <div className="w-full flex justify-between items-center mx-auto max-lg:my-10 lg:py-6">
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