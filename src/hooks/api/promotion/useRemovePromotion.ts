import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getPromotionService, { Promotion } from "../../../services/api/promotionService"
import { PROMOTIONS_CACHE_KEY } from "../../../utils/keys"

interface RemovePromotionData {
    access: string
}

interface Props {
    promotionId: number
}

const useRemovePromotion = ({ promotionId }: Props): UseMutationResult<Promotion, Error, RemovePromotionData> => {
    
    const promotionService = getPromotionService({ promotionId })
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: RemovePromotionData) => promotionService.delete(data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: PROMOTIONS_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }

    })
}

export default useRemovePromotion
