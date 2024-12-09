import { useState } from "react"
import Input from "../ui/Input"
import useGetDishes from "../../hooks/api/dish/useGetDishes"
import { motion } from "framer-motion"

interface Props {
    setDish: React.Dispatch<React.SetStateAction<number>>
    setCost?: React.Dispatch<React.SetStateAction<number>>
    setDishLookup: React.Dispatch<React.SetStateAction<string>>
    dishLookup: string
    dishError: string
    setDishError: React.Dispatch<React.SetStateAction<string>>
}

const DishLookup = ({ setDish, setCost, setDishLookup, dishLookup, dishError, setDishError }: Props) => {

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
                if (dishLookup.length > 0) {
                    setDishError('')
                }
                if (!showDishes && dishLookup.length > 0) {
                    setShowDishes(true)
                }
                setDishLookup(e.target.value)
            }}
            error={dishError}
        />
        <motion.div
            initial={{opacity: 0, translateY: -30}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 0.5}}
            className="dark:bg-slate-800 bg-slate-200 rounded-3xl w-full"
        >
            {showDishes && dishLookup.length > 0 && dishes
                .filter(dish => dish.available)
                .filter(dish => dish.name.toLowerCase().includes(dishLookup.toLowerCase()))
                .map( dish => (
                    <div key={dish.id} className="px-6 py-2 hover:bg-blue-700 rounded-3xl hover:text-slate-50 my-2">
                        <p
                            onClick={() => {
                                setDishLookup(dish.name)
                                setDish(dish.id)
                                setCost && setCost(dish.cost)
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