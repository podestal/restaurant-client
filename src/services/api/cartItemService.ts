import APIClient from "./apiClient"

export interface CartItem {
    id: number
    quantity: number
    dish: number
    price: number
    cart: number
    observations: string
}

export type CartItemCreate = Omit<CartItem, 'id' | 'dish'> & {
    promotion?: number
    dish?: number
}

const getCartItemService = (cartId: number, cartItemId?: number) => {
    const URL = cartItemId ? `/carts/${cartId}/cart-items/${cartItemId}/` : `carts/${cartId}/cart-items/`
    return new APIClient<CartItem, CartItemCreate>(URL)
}

export default getCartItemService