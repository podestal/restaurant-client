import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getDishService, { Dish } from "../../../services/api/dishService"
import { DISHES_CACHE_KEY } from "../../../utils/keys"

export interface UpdateDishData {
    access: string
    dish: FormData
}

interface Props {
    dishId: number
}

const useUpdateDish = ({ dishId }: Props): UseMutationResult<Dish, Error, UpdateDishData> => {

    const dishService = getDishService(dishId)
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: UpdateDishData) => dishService.update(data.dish, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: DISHES_CACHE_KEY })
        },
        onError: err => console.log(err)
    })
}

export default useUpdateDish