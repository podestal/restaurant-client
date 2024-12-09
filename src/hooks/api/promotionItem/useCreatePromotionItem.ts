import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getPromotionItemService,  { PromotionItem, PromotionItemCreate } from "../../../services/api/promotionItemService"
import { getPromotionItemCacheKey } from "../../../utils/keys"

interface CreatepromotionItemData {
    access: string
    promotion: PromotionItemCreate
}

interface Props {
    promotionId: number
}

const useCreatePromotionItem = ({ promotionId }: Props): UseMutationResult<PromotionItem, Error, CreatepromotionItemData> => {
    
    const promotionItemService = getPromotionItemService({ promotionId })
    const promotionItemCacheKey = getPromotionItemCacheKey(promotionId)
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (data: CreatepromotionItemData) => promotionItemService.post(data.promotion, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: promotionItemCacheKey })
        },
        onError: err => {
            console.log(err);
        }
    })
}

export default useCreatePromotionItem