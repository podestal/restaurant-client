import APIClient from "./apiClient"

export interface Order {
    id: number
    table: number
    created_at: Date
    updated_at: Date
    status: string
    created_by: number
}

export type OrderCreate = Omit<Order, 'id' |'created_at' | 'updated_at'>

interface Props {
    tableId: number
    orderId?: number
}

const getOrderService = ({ tableId, orderId }: Props) => {
    const URL = orderId ? `orders/${orderId}/` : `orders/?table=${tableId}&status=`
    return new APIClient<Order, OrderCreate>(URL)
}

export default getOrderService