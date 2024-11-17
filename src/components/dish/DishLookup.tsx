import { useState } from "react"
import Input from "../ui/Input"
import useGetDishes from "../../hooks/api/dish/useGetDishes"
import { motion } from "framer-motion"
import { DishInfo } from "../orderItems/OrderItemForm"

interface Props {
    setSelectedDish: React.Dispatch<React.SetStateAction<DishInfo>>
    
}

const DishLookup = ({ setSelectedDish }: Props) => {

    const [dishLookup, setDishLookup] = useState('')
    const [showDishes, setShowDishes] = useState(false)
    const { data: dishes, isLoading, isError, error, isSuccess } = useGetDishes()

    if (isLoading) return <p className="animate-pulse">Loading ...</p>

    if (isError) return <p>Error {error.message}</p>

    if (isSuccess)

  return (
    <div className="col-span-3">
        <Input 
            placeholder="Dish ..."
            value={dishLookup}
            onChange={e => {
                if (!showDishes && dishLookup.length > 0) {
                    setShowDishes(true)
                }
                setDishLookup(e.target.value)
            }}
        />
        <motion.div
            initial={{opacity: 0, translateY: -30}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 0.5}}
            className="bg-slate-800 rounded-3xl w-full"
        >
            {showDishes && dishLookup.length > 0 && dishes
                .filter(dish => dish.name.toLowerCase().includes(dishLookup.toLowerCase()))
                .map( dish => (
                    <div key={dish.id} className="px-6 py-2 hover:bg-blue-700 rounded-3xl">
                        <p
                            onClick={() => {
                                setDishLookup(dish.name)
                                setSelectedDish({
                                    dishCost: dish.cost,
                                    dishId: dish.id
                                })
                                setShowDishes(false)
                            }}
                        >{dish.name}</p>
                    </div>
                ))
            }
        </motion.div>
    </div>
  )
}

export default DishLookup