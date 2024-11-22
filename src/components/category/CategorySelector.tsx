import useGetCategories from "../../hooks/api/category/useGetCategories"
import Selector from "../ui/Selector" 

interface Props {
    setSelectedCategory: (categoryId: number) => void 
    categoryId?: number 
    all?: boolean 
}

const CategorySelector = ({ setSelectedCategory, categoryId, all }: Props) => {

    const defaultValue = categoryId || 0 
    const { data: categories, isLoading, isError, error, isSuccess } = useGetCategories() 

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)
        return (
            <Selector 
                defaultValue={defaultValue} 
                values={categories} 
                setter={setSelectedCategory} 
                label="Categories" 
                all={all} 
            />
        )

    return null 
}

export default CategorySelector 