import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getOrderItemService, { OrderItem } from "../../../services/api/orderItemService"
import { getOrderItemCacheKey } from "../../../utils/keys"

interface DateParams {
    month: number
    year: number
}

interface Props {
    access: string
    orderId?: number
    date?: string
    dateParams?: DateParams
}

const useGetOrderItems = ({ access, orderId, date, dateParams }: Props): UseQueryResult<OrderItem[], Error> => {
    console.log('dateParams',dateParams);
    
    const orderItemService = date ? getOrderItemService({ date }) : getOrderItemService({ })
    const ORDER_ITEM_CACHE_KEY = orderId ? getOrderItemCacheKey(orderId) : [`orders ${dateParams?.month} ${dateParams?.year}`]
    return useQuery({
        queryKey: ORDER_ITEM_CACHE_KEY,
        queryFn: () => !dateParams ? orderItemService.get(access) : orderItemService.get(access, '', dateParams.year, dateParams.month),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetOrderItems