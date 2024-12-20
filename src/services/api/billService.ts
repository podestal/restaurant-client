import APIClient from "./apiClient"
import { SimpleOrderItem } from "./orderService"

export interface Bill {
    id: number
    table: number
    document: string
    order_items: SimpleOrderItem[]
}

export type BillCreateDelete  = Omit<Bill, 'id' | 'order_items' | 'table' | 'document'> & {
    document?: string
}

interface Props {
    tableId: number
    billId?: number
}

const getBillService = ({ tableId, billId }: Props) => {
    const URL = billId ? `/tables/${tableId}/bill/${billId}/` : `/tables/${tableId}/bill/`
    return new APIClient<Bill, BillCreateDelete>(URL)
}

export default getBillService