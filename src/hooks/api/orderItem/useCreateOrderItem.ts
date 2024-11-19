import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query"
import getOrderItemService, { OrderItem, OrderItemCreate } from "../../../services/api/orderItemService"
import { getOrderCacheKey } from "../../../utils/keys"

export interface CreateOrderItemData {
    access: string
    orderItem: OrderItemCreate
}

interface Props {
    tableId: number
}


const useCreateOrderItem = ({ tableId }: Props): UseMutationResult<OrderItem, Error, CreateOrderItemData> => {
    const orderItemService = getOrderItemService({ })
    const ORDER_CACHE_KEY = getOrderCacheKey({tableId})
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateOrderItemData) => orderItemService.post(data.orderItem, data.access),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
        },
        onError: err => console.log(err)
    })
}

export default useCreateOrderItem
