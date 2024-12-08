import APIClient from "./apiClient"

export interface Promotion {
    id: number
    name: string
    description: string
    amount: number
    is_active: boolean
    items: any[]
}

export type PromotionCreate = Omit<Promotion, 'id' | 'items'>


interface Props {
    prmotionId?: number
}

const getPromotionService = ({ prmotionId }: Props) => {
    const URL = prmotionId ? `promotions/${prmotionId}/` : `promotions/`
    return new APIClient<Promotion, PromotionCreate>(URL)
}

export default getPromotionService