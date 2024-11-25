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
    waiter: string
    order_type: string
    order_items: SimpleOrderItem[]
}

export type OrderCreate = Omit<Order, 'id' |'created_at' | 'updated_at' | 'order_items' | 'waiter' | 'table'> & {
    table: number | null
}

interface Props {
    tableId?: number
    status?: string
    orderId?: number
}

const getOrderService = ({ tableId, orderId, status }: Props) => {
    let url = 'orders/'
    if (tableId !== undefined) {
        url = `orders/?table=${tableId}&status=`
    } else if (status !== undefined) {
        url = `orders/?table=&status=${status}`
    } else if (orderId) {
        url = `orders/${orderId}/`
    }

    return new APIClient<Order, OrderCreate>(url)
}

export default getOrderService