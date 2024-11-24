import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getOrderService, { Order } from "../../../services/api/orderService"
import { getOrderCacheKey } from "../../../utils/keys"

interface RemoveOrderData {
    access: string
}

interface Props {
    orderId: number
    status?: string
    tableId?: number
}

const useRemoveOrder = ({ orderId, status, tableId }: Props): UseMutationResult<Order, Error, RemoveOrderData> => {
    
    const orderService = getOrderService({ orderId })
    const ORDER_CACHE_KEY = tableId ? getOrderCacheKey({ tableId }) : getOrderCacheKey({ status })
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: RemoveOrderData) => orderService.delete(data.access),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
        },
        onError: err => console.log('ERROR', err)
    })
}

export default useRemoveOrder