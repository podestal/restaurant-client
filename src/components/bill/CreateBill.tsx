import useCreateBill from "../../hooks/api/bill/useCreateBill"
import Button from "../ui/Button"
import useAuthStore from "../../hooks/store/useAuthStore"

interface Props {
    tableId: number
}

const CreateBill = ({ tableId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const createBill = useCreateBill({ tableId })

    const handleCreate = () => {
        createBill.mutate({ bill: {table: tableId}, access })
    }

  return (
    <>
        <Button 
            label='Open Table'
            onClick={handleCreate}
        />
    </>
  )
}

export default CreateBill