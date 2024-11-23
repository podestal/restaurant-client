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
}

export type DishCreate = Omit<Dish, 'id'| 'created_at'>

const getDishService = (dishId?: number) => {
    const URL = dishId ? `dishes/${dishId}/` : 'dishes/'
    return new APIClient<Dish, DishCreate>(URL)
}

export default getDishService
