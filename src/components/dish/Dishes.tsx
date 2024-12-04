import useGetDishes from "../../hooks/api/dish/useGetDishes"
import { Cart } from "../../services/api/cartService"
import { Category } from "../../services/api/categoryService"
import DishCard from "./DishCard"
import { motion } from 'framer-motion'

interface Props {
    categories: Category[]
    cart: Cart
}

const Dishes = ({ categories, cart }: Props) => {

    const { data: dishes, isLoading, isError, error, isSuccess } = useGetDishes()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="col-span-5 max-lg:mt-[120px]">
        {categories && 
            categories
            .filter( category => category.available)
            .map( category => (
            <div 
                id={`${category.id}`}
                key={category.id}
            >
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 flex flex-col justify-start items-center md:items-start gap-4">
                    <h2 className="text-5xl font-bold font-poppins text-blue-700">{category.name}</h2>
                    <p>{category.description}</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                    {cart && dishes
                        .filter( dish => dish.category === category.id)
                        .filter( dish => dish.available)
                        .map( dish => (
                        <DishCard 
                            key={dish.id}
                            dish={dish}
                            cart={cart}
                        />
                    ))}
                </motion.div>
            </div>
        ))}
    </div> 
  )
}

export default Dishes