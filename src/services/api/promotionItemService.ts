import APIClient from "./apiClient"

export interface PromotionItem {
    id: number
    quantity: number
    name: string
}

export type PromotionItemCreate = Omit<PromotionItem, 'id' | 'name'> & {
    dish: number
    promotion: number
}

interface Props {
    promotionId: number
    promotionItemId?: number
}

const getPromotionItemService = ({promotionId, promotionItemId }: Props) => {   
    const URL = promotionItemId ? `promotions/${promotionId}/promotion-items/${promotionItemId}/` : `promotions/${promotionId}/promotion-items/` 
    return new APIClient<PromotionItem, PromotionItemCreate>(URL)
}

export default getPromotionItemService
