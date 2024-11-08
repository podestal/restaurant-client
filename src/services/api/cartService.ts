import APIClient from "./apiClient"

export interface Item {
    id: number
    quantity: number
    name: string
    picture: string
    price: number
}

export interface Cart {
    id: number
    session_id: string
    created_at: Date
    updated_at: Date
    user?: number
    items: Item[]
}

const getCartService = (access?: string) => {
    const URL = access ? 'carts/my-cart/' : 'carts/'
    return new APIClient<Cart>(URL)
}

export default getCartService