import useGetCategories from "../../hooks/api/category/useGetCategories"
import CategoryCardAdmin from "./CategoryCardAdmin"
import CreateCategory from "./CreateCategory"
import { motion } from "framer-motion"

const CategoreisAdmin = () => {

    const { data: categories, isLoading, isError, error, isSuccess } = useGetCategories()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        <CreateCategory />
        <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12 mt-12">
            {categories?.map( category => (
                <CategoryCardAdmin 
                    key={category.id}
                    category={category}
                />
            ))}
        </motion.div>
    </div>
  )
}

export default CategoreisAdmin