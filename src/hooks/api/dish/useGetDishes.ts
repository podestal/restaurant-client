import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getDishService, {Dish} from "../../../services/api/dishService"
import { DISHES_CACHE_KEY } from "../../../utils/keys"

const useGetDishes = (): UseQueryResult<Dish[], Error> => {
    const dishService = getDishService()
    return useQuery({
        queryKey: DISHES_CACHE_KEY,
        queryFn: () => dishService.get(),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetDishes
