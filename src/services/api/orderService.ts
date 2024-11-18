import APIClient from "./apiClient"

export interface SimpleOrderItem {
    id: number
    quantity: number
    cost: number
    observations: string
    name: string
}

export interface Order {
    id: number
    table: number
    created_at: Date
    updated_at: Date
    status: string
    created_by: number
    order_items: SimpleOrderItem[] | undefined
}

export type OrderCreate = Omit<Order, 'id' |'created_at' | 'updated_at' | 'order_items'>

interface Props {
    tableId: number
    orderId?: number
}

const getOrderService = ({ tableId, orderId }: Props) => {
    const URL = orderId ? `orders/${orderId}/` : `orders/?table=${tableId}&status=`
    return new APIClient<Order, OrderCreate>(URL)
}

export default getOrderService