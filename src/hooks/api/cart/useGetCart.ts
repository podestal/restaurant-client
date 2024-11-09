import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getCartService, {Cart} from "../../../services/api/cartService"
import { getCacheCartKey } from "../../../utils/keys"

const useGetCart = (access?: string): UseQueryResult<Cart[], Error> => {
    const cartService = getCartService(access)
    const CACHE_CART_KEY = getCacheCartKey(access)
    return useQuery({
        queryKey: CACHE_CART_KEY,
        queryFn: () => cartService.get(access),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetCart