import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getOrderService, { Order } from "../../../services/api/orderService"
import { getOrderCacheKey } from "../../../utils/keys"

interface Props {
    access: string
    tableId: number
}

const useGetOrders = ({ access, tableId }: Props): UseQueryResult<Order[], Error> => {
    const orderService = getOrderService({ tableId })
    const ORDER_CACHE_KEY = getOrderCacheKey(tableId)
    return useQuery({
        queryKey: ORDER_CACHE_KEY,
        queryFn: () => orderService.get(access),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetOrders