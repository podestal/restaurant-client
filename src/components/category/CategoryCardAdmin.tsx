import { Category } from "../../services/api/categoryService"
import RemoveCategory from "./RemoveCategory"
import { motion } from "framer-motion"

interface Props {
    category: Category
}

const CategoryCardAdmin = ({ category }: Props) => {
  return (
    <motion.div 
        layout
        className="w-full flex justify-start items-center gap-10 mt-4">
        <RemoveCategory 
            category={category}
        />
        <p>{category.name}</p>
    </motion.div>
  )
}

export default CategoryCardAdmin