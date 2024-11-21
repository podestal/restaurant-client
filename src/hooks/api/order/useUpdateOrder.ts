import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getOrderService, { Order, OrderCreate } from "../../../services/api/orderService"
import { getOrderCacheKey, getBillCacheKey } from "../../../utils/keys"

interface UpdateOrderData {
    access: string
    updates: OrderCreate
}

interface Props {
    tableId: number
    orderId: number
}

const useUpdateOrder = ({ tableId, orderId }: Props): UseMutationResult<Order, Error, UpdateOrderData> => {

    const orderService = getOrderService({ orderId})
    const ORDER_CACHE_KEY = getOrderCacheKey({tableId})
    const BILL_CACHE_KEY = getBillCacheKey(tableId)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: UpdateOrderData) => orderService.update(data.updates, data.access),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
            queryClient.invalidateQueries({ queryKey: BILL_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useUpdateOrder