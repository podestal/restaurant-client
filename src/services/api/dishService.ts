import APIClient from "./apiClient"

export interface Dish {
    id: number
    name: string
    description: string
    cost: number
    created_at: Date
    available: boolean
    picture_url: string
    category: number
    discount: number
    final_price: number
}

export type DishCreate = Omit<Dish, 'id'| 'created_at' | 'picture_url' | 'final_price'> & {
    picture: File
    discount?: number
}

const getDishService = (dishId?: number) => {
    const URL = dishId ? `dishes/${dishId}/` : 'dishes/'
    return new APIClient<Dish, FormData>(URL)
}

export default getDishService
