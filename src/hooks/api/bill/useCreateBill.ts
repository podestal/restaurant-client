import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getBillService, { Bill, BillCreateDelete } from "../../../services/api/billService"
import { getBillCacheKey } from "../../../utils/keys"

interface CreateBillData {
    access: string
    bill: BillCreateDelete
}

interface Props {
    tableId: number
}

const useCreateBill = ({ tableId }: Props): UseMutationResult<Bill, Error, CreateBillData> => {

    const billService = getBillService({ tableId })
    const BILL_QUERY_CACHE = getBillCacheKey(tableId)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateBillData) => billService.post(data.bill, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({ queryKey: BILL_QUERY_CACHE })
        },
        onError: err => console.log(err)
        
    })
}

export default useCreateBill