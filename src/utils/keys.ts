export const CATEGORIES_CACHE_KEY = ['categories']

export const DISHES_CACHE_KEY = ['dishes']

export const getCacheCartKey = (access?: string) => {
    return access ? ['authenticated cart'] : ['anonymous cart']
} 

export const TABLES_CACHE_KEY = ['tables']

export const getOrderCacheKey = (tableId: number) => {
    return [`orders ${tableId}`]
}