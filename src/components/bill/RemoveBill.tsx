import useRemoveBill from "../../hooks/api/bill/useRemoveBill"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"

interface Props {
    tableId: number
    billId: number
}


const RemoveBill = ({ tableId, billId }: Props) => {

    console.log('billId from remove', billId);
    
    const access = useAuthStore(s => s.access) || ''
    const removeBill = useRemoveBill({ tableId, billId })
    
    const handleRemove = () => {
        removeBill.mutate({ access })
    }

  return (
    <div>
        <Button 
            label='Close table'
            color="red"
            onDoubleClick={handleRemove}
        />
    </div>
  )
}

export default RemoveBill