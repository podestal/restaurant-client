import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getOrderItemService, { OrderItem } from "../../../services/api/orderItemService"
import { getOrderItemCacheKey } from "../../../utils/keys"

interface Props {
    access: string
    orderId: number
}

const useGetOrderItems = ({ access, orderId }: Props): UseQueryResult<OrderItem[], Error> => {

    const orderItemService = getOrderItemService({ orderId })
    const ORDER_ITEM_CACHE_KEY = getOrderItemCacheKey(orderId)
    return useQuery({
        queryKey: ORDER_ITEM_CACHE_KEY,
        queryFn: () => orderItemService.get(access),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetOrderItems