import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getOrderService, { Order } from "../../../services/api/orderService"
import { getOrderCacheKey } from "../../../utils/keys"

interface Props {
    access: string
    tableId?: number
    status?: string
}

const useGetOrders = ({ access, tableId, status }: Props): UseQueryResult<Order[], Error> => {
    const orderService = tableId ? getOrderService({ tableId }) : getOrderService({status})
    const ORDER_CACHE_KEY = tableId && getOrderCacheKey({tableId}) || ['']
    return useQuery({
        queryKey: ORDER_CACHE_KEY,
        queryFn: () => orderService.get(access),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetOrders