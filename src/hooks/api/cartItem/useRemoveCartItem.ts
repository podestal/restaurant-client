import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getCartItemService, { CartItem } from "../../../services/api/cartItemService"
import { getCacheCartKey } from "../../../utils/keys"

interface RemoveCartItemData {
    access: string
}

const useRemoveCartItem = (cartId: number, cartItemId: number): UseMutationResult<CartItem, Error, RemoveCartItemData> => {
    
    const cartItemService = getCartItemService(cartId, cartItemId)
    const CART_CACHE_KEY = getCacheCartKey()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: RemoveCartItemData) => cartItemService.delete(data.access),
        onSuccess: () => {
            console.log(`cart item ${cartItemId} removed`)
            queryClient.invalidateQueries({ queryKey: CART_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
            
        }
    })
}

export default useRemoveCartItem