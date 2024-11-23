import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getCategoryService, { Category } from "../../../services/api/categoryService"
import { CATEGORIES_CACHE_KEY } from "../../../utils/keys"
import { AxiosError } from "axios"

interface RemoveCategoryData {
    access: string
}

interface Props {
    categoryId: number
}

const useRemoveCategory = ({ categoryId }: Props): UseMutationResult<Category, AxiosError, RemoveCategoryData> => {

    const categoryService = getCategoryService(categoryId)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: RemoveCategoryData) => categoryService.delete(data.access),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: CATEGORIES_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useRemoveCategory