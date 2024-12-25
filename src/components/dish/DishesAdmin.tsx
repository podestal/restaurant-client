import { useState } from "react"
import useGetDishes from "../../hooks/api/dish/useGetDishes"
import CreateDish from "./CreateDish"
import DishCardAdmin from "./DishCardAdmin"
import Input from "../ui/Input"
import CategoreisAdmin from "../category/CategoreisAdmin"
import Tabs from "../ui/Tabs"
import { motion } from "framer-motion"
import useLoader from "../../hooks/ui/useLoader"
import Promotions from "../promotion/Promotions"
import useLanguageStore from "../../hooks/store/useLanguageStore"

const DishesAdmin = () => {

    const [dishFilter, setDishFilter] = useState('')
    const {data: dishes, isLoading, isError, error, isSuccess } = useGetDishes()
    const lan = useLanguageStore(S => S.lan)

    useLoader(isLoading)

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="w-full mt-10 py-10">
        <Tabs
            tabs={[
                {
                    label: lan === 'EN' ? 'Dishes' : 'Platos',
                    content:         
                    <>
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex max-lg:flex-col max-lg:mt-12 justify-evenly items-center gap-12 mb-6 pl-4">
                            <CreateDish />
                            <Input 
                                placeholder={lan === 'EN' ? "Filter by name ..." : 'Filtrar por nombre ...'}
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
                    label: lan === 'EN' ? 'Categories' : 'Categorias',
                    content:         
                    <>
                        <CategoreisAdmin />
                    </>
                },
                {
                    label: lan === 'EN' ? 'Promotions' : 'Promociones',
                    content:         
                    <>
                       <Promotions />
                    </>
                },

            ]}
        />
    </div>

  )
}

export default DishesAdmin