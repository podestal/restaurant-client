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
        <p className="text-3xl pb-10">{category.name}</p>
    </div>
  )
}

export default CategoryCard