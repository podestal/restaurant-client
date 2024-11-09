import APIClient from "./apiClient"

interface CartItem {
    id: number
    quantity: number
    dish: number
    price: number
    cart: number
}

export type CartItemCreate = Omit<CartItem, 'id'>

const getCartItemService = (cartId: number, cartItemId?: number) => {
    const URL = cartItemId ? `/carts/${cartId}/cart-items/${cartItemId}/` : `carts/${cartId}/cart-items/`
    return new APIClient<CartItem, CartItemCreate>(URL)
}

export default getCartItemService