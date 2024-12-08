import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getPromotionService, { Promotion, PromotionCreate } from "../../../services/api/promotionService"
import { PROMOTIONS_CACHE_KEY } from "../../../utils/keys"

interface CreatePromotionData {
    access: string
    promotion: PromotionCreate
}

const useCreatePromotion = (): UseMutationResult<Promotion, Error, CreatePromotionData> => {

    const promotionService = getPromotionService({})
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreatePromotionData) => promotionService.post(data.promotion, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({queryKey:PROMOTIONS_CACHE_KEY })
        },
        onError: err => console.log(err)
    })
}

export default useCreatePromotion