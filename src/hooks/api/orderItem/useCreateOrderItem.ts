import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query"
import getOrderItemService, { OrderItem, OrderItemCreate } from "../../../services/api/orderItemService"
import { getOrderCacheKey } from "../../../utils/keys"

export interface CreateOrderItemData {
    access: string
    orderItem: OrderItemCreate
}

interface Props {
    orderId: number
    tableId: number
}


const useCreateOrderItem = ({ orderId, tableId }: Props): UseMutationResult<OrderItem, Error, CreateOrderItemData> => {

    const orderItemService = getOrderItemService({ orderId })
    const ORDER_CACHE_KEY = getOrderCacheKey(tableId)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateOrderItemData) => orderItemService.post(data.orderItem, data.access),
        onSuccess: res => {
            queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
            console.log('order item', res);
        },
        onError: err => console.log(err)
    })
}

export default useCreateOrderItem