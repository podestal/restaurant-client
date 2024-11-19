import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getBillService, { Bill } from "../../../services/api/billService"
import { getBillCacheKey, TABLES_CACHE_KEY } from "../../../utils/keys"

interface RemoveBillData {
    access: string
}

interface Props {
    billId: number
    tableId: number
}

const useRemoveBill = ({ billId, tableId }: Props): UseMutationResult<Bill, Error, RemoveBillData> => {
    console.log('use remove bill');
    
    const billService = getBillService({ tableId, billId })
    const BILL_CACHE_KEY = getBillCacheKey(tableId)
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: RemoveBillData) => billService.delete(data.access),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: BILL_CACHE_KEY })
            queryClient.invalidateQueries({ queryKey: TABLES_CACHE_KEY })
        }, 
        onError: err => console.log(err)
    })
}

export default useRemoveBill
