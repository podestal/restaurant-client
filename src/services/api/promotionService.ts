import APIClient from "./apiClient"
import { PromotionItem } from "./promotionItemService"

export interface Promotion {
    id: number
    name: string
    description: string
    amount: string
    is_active: boolean
    items: PromotionItem[]
}

export type PromotionCreate = Omit<Promotion, 'id' | 'items'>


interface Props {
    promotionId?: number
}

const getPromotionService = ({ promotionId }: Props) => {
    const URL = promotionId ? `promotions/${promotionId}/` : `promotions/`
    return new APIClient<Promotion, PromotionCreate>(URL)
}

export default getPromotionService