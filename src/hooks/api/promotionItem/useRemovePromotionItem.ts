import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getPromotionItemService, { PromotionItem } from "../../../services/api/promotionItemService"
import { getPromotionItemCacheKey } from "../../../utils/keys"

interface RemovePromotionItemData {
    access: string
}

interface Props {
    promotionId: number
    promotionItemId: number
}

const useRemovePromotionItem = ({ promotionId, promotionItemId }: Props): UseMutationResult<PromotionItem, Error, RemovePromotionItemData> => {
    
    const promotionItemService = getPromotionItemService({ promotionId, promotionItemId })
    const promotionItemCacheKey = getPromotionItemCacheKey(promotionId)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: RemovePromotionItemData) => promotionItemService.delete(data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: promotionItemCacheKey })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useRemovePromotionItem