import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getCartService, {Cart} from "../../../services/api/cartService"
import { getCacheCartKey } from "../../../utils/keys"


interface Props {
    access?: string
    sessionId?: string
}

const useGetCart = ({ access, sessionId }: Props): UseQueryResult<Cart[], Error> => {
    const cartService = getCartService({ sessionId })
    const CACHE_CART_KEY = getCacheCartKey(access)
    return useQuery({
        queryKey: CACHE_CART_KEY,
        queryFn: () => cartService.get('', sessionId),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetCart