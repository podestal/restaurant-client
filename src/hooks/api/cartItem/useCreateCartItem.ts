import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getCartItemService, { CartItem, CartItemCreate } from "../../../services/api/cartItemService"
import { getCacheCartKey } from "../../../utils/keys"

export interface CreateCartItemData {
    cartItem: CartItemCreate
}

const useCreateCartItem = (cartId: number): UseMutationResult<CartItem, Error, CreateCartItemData> => {
    const cartItemService = getCartItemService(cartId)
    const CART_CACHE_KEY = getCacheCartKey()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: CreateCartItemData) => cartItemService.post(data.cartItem),
        onSuccess: res => {
            console.log('cart item', res)
            queryClient.invalidateQueries({ queryKey: CART_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useCreateCartItem