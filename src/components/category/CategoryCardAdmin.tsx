import { Category } from "../../services/api/categoryService"
import { COLORS } from "../../utils/colors";
import RemoveCategory from "./RemoveCategory"
import { motion } from "framer-motion"

interface Props {
    category: Category
}

const getRandomColor = (id: number) => {
  const index = id % COLORS.length;
  
  return COLORS[index];
};

const CategoryCardAdmin = ({ category }: Props) => {

  const backgroundColor = getRandomColor(category.id)
  console.log(`${backgroundColor} ${category.name}`);
  

  return (
    <motion.div 
      layout
      className="flex">
      <div 
          className={`w-full flex justify-center items-center gap-10 h-32 ${backgroundColor} rounded-2xl shadow-xl shadow-slate-500`}>
          <p className="text-xl  text-slate-50 font-bold font-palanquin">{category.name}</p>
      </div>
      <RemoveCategory 
          category={category}
      />
    </motion.div>
  )
}

export default CategoryCardAdmin