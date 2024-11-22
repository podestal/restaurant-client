import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getDishService, { Dish, DishCreate }  from "../../../services/api/dishService"
import { DISHES_CACHE_KEY } from "../../../utils/keys"

interface DishCreateData {
    access: string
    dish: DishCreate
}

const useCreateDish = (): UseMutationResult<Dish, Error, DishCreateData> => {

    const dishService = getDishService()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: DishCreateData) => dishService.post(data.dish, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: DISHES_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
            
        }
    })
}

export default useCreateDish