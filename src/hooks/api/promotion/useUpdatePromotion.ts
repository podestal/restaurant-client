import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getPromotionService, { Promotion, PromotionCreate } from "../../../services/api/promotionService"
import { PROMOTIONS_CACHE_KEY } from "../../../utils/keys"

export interface UpdatePromotionData{
    access: string
    updates: PromotionCreate
}

interface Props {
    promotionId: number
}

const useUpdatePromotion = ({ promotionId }: Props): UseMutationResult<Promotion, Error, UpdatePromotionData> => {
    const promotionService = getPromotionService({ promotionId })
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: UpdatePromotionData) => promotionService.update(data.updates, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: PROMOTIONS_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useUpdatePromotion