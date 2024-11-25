import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getOrderService, { Order, OrderCreate } from "../../../services/api/orderService"
import { getOrderCacheKey, getBillCacheKey } from "../../../utils/keys"

interface UpdateOrderData {
    access: string
    updates: OrderCreate
}

interface Props {
    tableId?: number
    orderId: number
    status?:string
}

const useUpdateOrder = ({ tableId, orderId, status }: Props): UseMutationResult<Order, Error, UpdateOrderData> => {

    const orderService = getOrderService({ orderId})
    const ORDER_CACHE_KEY = tableId ? getOrderCacheKey({tableId}) : getOrderCacheKey({status})
    const BILL_CACHE_KEY = tableId && getBillCacheKey(tableId)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: UpdateOrderData) => orderService.update(data.updates, data.access),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
            BILL_CACHE_KEY && queryClient.invalidateQueries({ queryKey: BILL_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useUpdateOrder