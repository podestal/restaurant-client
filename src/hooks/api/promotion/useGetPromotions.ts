import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getPromotionService, { Promotion } from "../../../services/api/promotionService"
import { PROMOTIONS_CACHE_KEY } from "../../../utils/keys"

const useGetPromotion = (): UseQueryResult<Promotion[], Error> => {

    const promotionService = getPromotionService({})

    return useQuery({
        queryKey: PROMOTIONS_CACHE_KEY,
        queryFn: () => promotionService.get(),
        staleTime: 1 * 60 * 1000,
    })
}

export default useGetPromotion