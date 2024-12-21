import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getBillService, { Bill, BillCreateDelete } from "../../../services/api/billService"
import { getBillCacheKey } from "../../../utils/keys"

export interface UpdateBillData {
    access: string
    updates: BillCreateDelete
}

interface Props {
    tableId: number
    billId?: number
}

const useUpdateBill = ({ tableId, billId }: Props): UseMutationResult<Bill, Error,UpdateBillData> => {

    const billService = getBillService({ tableId, billId })
    const queryClient = useQueryClient()
    const BILL_CACHE_KEY = getBillCacheKey(tableId)

    return useMutation({
        mutationFn: (data: UpdateBillData) => billService.update(data.updates, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: BILL_CACHE_KEY })
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useUpdateBill