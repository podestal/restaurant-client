import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getCartItemService, { CartItem, CartItemCreate } from "../../../services/api/cartItemService"
import { getCacheCartKey } from "../../../utils/keys"

interface UpdateCartItemData {
    access: string
    updates: CartItemCreate
}

interface Props {
    cartId: number
    cartItemId: number
}

const useUpdateCartItem = ({cartId, cartItemId }: Props): UseMutationResult<CartItem, Error, UpdateCartItemData> => {

    const cartItemService = getCartItemService(cartId, cartItemId)
    const CART_CACHE_KEY = getCacheCartKey()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: UpdateCartItemData) => cartItemService.update(data.updates, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: CART_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useUpdateCartItem