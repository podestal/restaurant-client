import useGetCategories from "../../hooks/api/category/useGetCategories"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import Selector from "../ui/Selector" 

interface Props {
    setSelectedCategory: (categoryId: number) => void 
    categoryId?: number 
    all?: boolean 
    error?: string
}

const CategorySelector = ({ setSelectedCategory, categoryId, all, error }: Props) => {

    const defaultValue = categoryId || 0 
    const { data: categories, isLoading, isError, error: errorCat, isSuccess } = useGetCategories() 
    const lan = useLanguageStore(s => s.lan)

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {errorCat.message}</p>

    if (isSuccess)
        return (
            <Selector 
                defaultValue={defaultValue} 
                values={categories} 
                setter={setSelectedCategory} 
                label={lan === 'EN' ? "Categories" : 'Categorias'}
                all={all} 
                error={error}
                lan={lan}
            />
        )

    return null 
}

export default CategorySelector 