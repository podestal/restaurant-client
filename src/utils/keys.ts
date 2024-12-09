export const CATEGORIES_CACHE_KEY = ['categories']

export const DISHES_CACHE_KEY = ['dishes']

export const getCacheCartKey = (access?: string) => {
    return access ? ['authenticated cart'] : ['anonymous cart']
} 

export const TABLES_CACHE_KEY = ['tables']

export const getOrderCacheKey = ({ tableId, status }:{tableId?: number, status?: string}) => {
    return tableId ? [`orders ${tableId}`] : [`orders ${status}`]
}

export const getOrderItemCacheKey = (orderId: number) => {
    return [`orderItem ${orderId}`]
}

export const getBillCacheKey = (tableId: number) => {
    return [`bill ${tableId}`]
}

export const PROMOTIONS_CACHE_KEY = ['promotions']

export const getPromotionItemCacheKey = (promotionId: number) => {
    return [`promotionItems ${promotionId}`]
}