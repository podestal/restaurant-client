import APIClient from "./apiClient"

export interface Item {
    id: number
    quantity: number
    name: string
    picture: string
    price: number
    dish_id: number
    observations: string
}

export interface Cart {
    id: number
    session_id: string
    created_at: Date
    updated_at: Date
    user?: number
    items: Item[]
}

interface Props {
    access?: string
    sessionId?: string
}

const getCartService = ({ access }: Props) => {
    const URL = access ? 'carts/my-cart/' : 'carts/'
    return new APIClient<Cart>(URL)
}

export default getCartService