import { Category } from "../../services/api/categoryService"

interface Props {
    category: Category
}

const CategoryCard = ({ category }: Props) => {
  return (
    <div className="hover:dark:text-slate-300 hover:text-slate-600 cursor-pointer mb-10">
        <p className="text-3xl pb-10">{category.name}</p>
        {/* <div className="w-full border-1 border-b-2 border-slate-900 dark:border-slate-400 mt-4"></div> */}
    </div>
  )
}

export default CategoryCard