import APIClient from "./apiClient"

export interface OrderItem {
    id: number
    order: number
    bill: number
    dish: number
    cost: number
    observations: string
    quantity: number
    created_at: Date
    name: string
}

export type OrderItemCreate = Omit<OrderItem, 'id'| 'created_at' | 'name'>

interface Props {
    orderItemId?: number
}

const getOrderItemService = ({ orderItemId }: Props) => {
    const URL = orderItemId ? `order-items/${orderItemId}/` : `/order-items/by_month/`
    return new APIClient<OrderItem, OrderItemCreate>(URL)
}

export default getOrderItemService