import { Category } from "../../services/api/categoryService"

interface Props {
    category: Category
}

const CategoryCard = ({ category }: Props) => {

    const handleClick = () => {
        const element = document.getElementById((String(category.id)));
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      };

  return (
    <div 
        onClick={handleClick}
        className="hover:dark:text-slate-300 hover:text-slate-600 cursor-pointer mb-4">
        <h2 className="md:text-xl lg:text-3xl max-lg:bg-blue-700 max-lg:py-2 max-lg:px-4 rounded-3xl lg:pt-6">{category.name}</h2>
    </div>
  )
}

export default CategoryCard