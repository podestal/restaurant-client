import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getOrderItemService, { OrderItem } from "../../../services/api/orderItemService"
import { getOrderItemCacheKey } from "../../../utils/keys"

interface Props {
    access: string
    orderId?: number
    date?: string
}

const useGetOrderItems = ({ access, orderId, date }: Props): UseQueryResult<OrderItem[], Error> => {

    const orderItemService = date ? getOrderItemService({ date }) : getOrderItemService({ })
    const ORDER_ITEM_CACHE_KEY = orderId ? getOrderItemCacheKey(orderId) : ['orders']
    return useQuery({
        queryKey: ORDER_ITEM_CACHE_KEY,
        queryFn: () => orderItemService.get(access),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetOrderItems