import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getCategoryService, {Category} from "../../../services/api/categoryService"
import { CATEGORIES_CACHE_KEY } from "../../../utils/keys"

const useGetCategories = (): UseQueryResult<Category[], Error> => {
    const categoryService = getCategoryService()
    return useQuery({
        queryKey: CATEGORIES_CACHE_KEY,
        queryFn: () => categoryService.get(),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetCategories