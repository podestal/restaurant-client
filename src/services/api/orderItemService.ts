import APIClient from "./apiClient"

export interface OrderItem {
    id: number
    order: number
    bill: number
    dish: number
    promotion: number
    cost: number
    observations: string
    quantity: number
    created_at: Date
    name: string
    category_name: string
}

export type OrderItemCreate = Omit<OrderItem, 'id'| 'created_at' | 'name' | 'category_name' | 'promotion' | 'dish'> & {
    dish?: number
    promotion?: number
}

interface Props {
    orderItemId?: number
    date?: string
}

const getOrderItemService = ({ orderItemId, date }: Props) => {
    let url = '/order-items/'
    if (date !== undefined) {
        url = `/order-items/by_month/`
    } else if (orderItemId !== undefined) {
        url = `order-items/${orderItemId}/`
    }
    console.log('URL:',url);
    
    return new APIClient<OrderItem, OrderItemCreate>(url)
}

export default getOrderItemService