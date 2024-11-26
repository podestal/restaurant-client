import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getOrderService, { OrderCreate, Order } from "../../../services/api/orderService"
import { getOrderCacheKey, getCacheCartKey } from "../../../utils/keys"

export interface CreateOrderData {
    access: string
    order: OrderCreate
}

interface Props {
    tableId?: number
    cart?: number
}

const useCreateOrder = ({ tableId, cart }: Props): UseMutationResult<Order, Error, CreateOrderData> => {

    const orderService = getOrderService({tableId})
    const ORDER_CACHE_KEY = getOrderCacheKey({tableId})
    const CART_CACHE_KEY = getCacheCartKey()
    const queryClient = useQueryClient()


    return useMutation({
        mutationFn: (data: CreateOrderData) => orderService.post(data.order, data.access, '', cart),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
            cart && queryClient.invalidateQueries({ queryKey: CART_CACHE_KEY })
        },
        onError: err => {
            console.log('err order', err);
        }
    })
}

export default useCreateOrder