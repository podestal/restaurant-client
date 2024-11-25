import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getOrderService, { OrderCreate, Order } from "../../../services/api/orderService"
import { getOrderCacheKey } from "../../../utils/keys"

export interface CreateOrderData {
    access: string
    order: OrderCreate
}

interface Props {
    tableId?: number
}

const useCreateOrder = ({ tableId }: Props): UseMutationResult<Order, Error, CreateOrderData> => {

    const orderService = getOrderService({tableId})
    const ORDER_CACHE_KEY = getOrderCacheKey({tableId})
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateOrderData) => orderService.post(data.order, data.access),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ORDER_CACHE_KEY })
        },
        onError: err => {
            console.log('err order', err);
        }
    })
}

export default useCreateOrder