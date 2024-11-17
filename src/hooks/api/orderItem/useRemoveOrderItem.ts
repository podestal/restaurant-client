import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getOrderItemService, { OrderItem } from "../../../services/api/orderItemService"
import { getOrderCacheKey } from "../../../utils/keys"

interface RemoveOrderItemData {
    access: string
}

interface Props {
    tableId: number
    orderItemId: number
}

const useRemoveOrderItem = ({ tableId, orderItemId }: Props): UseMutationResult<OrderItem, Error, RemoveOrderItemData> => {
    
    const orderItemService = getOrderItemService({ orderItemId })
    const ORDER_CACHE_KEY = getOrderCacheKey(tableId)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: RemoveOrderItemData) => orderItemService.delete(data.access),
        onSuccess: res => {
            queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
            console.log(res)
        },
        onError: err => console.log(err)
    })
}

export default useRemoveOrderItem
