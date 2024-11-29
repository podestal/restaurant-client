import APIClient from "./apiClient"

export interface Category {
    id: number
    name: string
    description: string
    time_perios: string
    available: boolean
}

export type CreateCategory = Omit<Category, 'id' | 'time_perios' | 'available'>

const getCategoryService = (categoryId?: number) => {
    const URL = categoryId ? `categories/${categoryId}/` : 'categories/'
    return new APIClient<Category, CreateCategory>(URL)
}

export default getCategoryService