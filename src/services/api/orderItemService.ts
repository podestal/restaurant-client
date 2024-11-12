import APIClient from "./apiClient"

export interface OrderItem {
    id: number
    order: number
    dish: number
    cost: number
    observations: string
    quantity: number
    created_at: Date
}

export type OrderItemCreate = Omit<OrderItem, 'id'| 'created_at'>

interface Props {
    orderId: number
    orderItemId?: number
}

const getOrderItemService = ({ orderId, orderItemId }: Props) => {
    const URL = orderItemId ? `orders/${orderId}/order-items/${orderItemId}/` : `order/${orderId}/order-items/`
    return new APIClient<OrderItem, OrderItemCreate>(URL)
}

export default getOrderItemService