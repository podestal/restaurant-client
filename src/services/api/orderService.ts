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
    status: 'P' | 'S' | 'C'
    created_by: number
    waiter: string
    order_type: 'I' | 'D' | 'T'
    order_items: SimpleOrderItem[]
    customer_name?: string
    customer_phone?: string
    customer_email?: string
    customer_address?: string
}

export type OrderCreate = Omit<Order, 'id' |'created_at' | 'updated_at' | 'order_items' | 'waiter' | 'table' | 'created_by'> & {
    table: number | null
    created_by?: number
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