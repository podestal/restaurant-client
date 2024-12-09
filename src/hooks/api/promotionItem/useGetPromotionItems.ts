import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getPromotionItemService, { PromotionItem } from "../../../services/api/promotionItemService"
import { getPromotionItemCacheKey } from "../../../utils/keys"


interface Props {
    promotionId: number
}

const useGetPromotionItems = ({ promotionId }: Props): UseQueryResult<PromotionItem[], Error> => {

    const promotionItemService = getPromotionItemService({ promotionId })
    const PROMOTION_ITEM_CACHE_KEY = getPromotionItemCacheKey(promotionId)

    return useQuery({
        queryKey: PROMOTION_ITEM_CACHE_KEY,
        queryFn: () => promotionItemService.get()
    })
}

export default useGetPromotionItems