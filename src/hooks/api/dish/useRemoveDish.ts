import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getDishService, { Dish } from "../../../services/api/dishService"
import { DISHES_CACHE_KEY } from "../../../utils/keys"

interface RemoveDishData {
    access: string
}

interface Props {
    dishId: number
}

const useRemoveDish = ({ dishId }: Props): UseMutationResult<Dish, Error, RemoveDishData> => {

    const dishService = getDishService(dishId)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: RemoveDishData) => dishService.delete(data.access),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: DISHES_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useRemoveDish