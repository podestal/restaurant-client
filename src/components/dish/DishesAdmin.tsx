import { useState } from "react"
import useGetDishes from "../../hooks/api/dish/useGetDishes"
import CreateDish from "./CreateDish"
import DishCardAdmin from "./DishCardAdmin"
import Input from "../ui/Input"
import CategoreisAdmin from "../category/CategoreisAdmin"
import Tabs from "../ui/Tabs"
import { motion } from "framer-motion"
import useLoader from "../../hooks/ui/useLoader"

const DishesAdmin = () => {

    const [dishFilter, setDishFilter] = useState('')
    const {data: dishes, isLoading, isError, error, isSuccess } = useGetDishes()

    useLoader(isLoading)

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="w-full mt-10 py-10">
        <Tabs
            tabs={[
                {
                    label: 'Dishes',
                    content:         
                    <>
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex max-lg:flex-col max-lg:mt-12 justify-evenly items-center gap-12 mb-6 pl-4">
                            <CreateDish />
                            <Input 
                                placeholder="Filter by name ..."
                                value={dishFilter}
                                onChange={e => setDishFilter(e.target.value)}
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-2">
                            {dishes
                                .filter( dish => dish.name.toLowerCase().includes(dishFilter.toLowerCase()))
                                .map(dish => (
                                <DishCardAdmin 
                                    key={dish.id}
                                    dish={dish}
                                />
                            ))}
                        </motion.div>
                    </>
                },
                {
                    label: 'Categories',
                    content:         
                    <>
                        <CategoreisAdmin />
                    </>
                },

            ]}
        />
    </div>

  )
}

export default DishesAdmin