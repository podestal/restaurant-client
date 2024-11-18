import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getBillService, { Bill } from "../../../services/api/billService"
import { getBillCacheKey } from "../../../utils/keys"

interface Props {
    access: string
    tableId: number
    enable: boolean
}

const useGetBill = ({ access, tableId, enable }: Props): UseQueryResult<Bill[], Error> => {

    const billService = getBillService({ tableId })
    const BILL_CACHE_KEY = getBillCacheKey(tableId)

    return useQuery({
        queryKey: BILL_CACHE_KEY,
        queryFn: () => billService.get(access),
        staleTime: 1 * 60 * 1000,
        enabled: enable
    })
}

export default useGetBill