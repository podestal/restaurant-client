import useRemoveBill from "../../hooks/api/bill/useRemoveBill"
import useAuthStore from "../../hooks/store/useAuthStore"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import Button from "../ui/Button"

interface Props {
    tableId: number
    billId: number
    allowRemoveBill: boolean
}


const RemoveBill = ({ tableId, billId, allowRemoveBill }: Props) => {

    console.log('billId from remove', billId);
    
    const access = useAuthStore(s => s.access) || ''
    const removeBill = useRemoveBill({ tableId, billId })
    const { setShow, setType, setMessage } = useNotificationsStore()
    
    const handleRemove = () => {
        if (!allowRemoveBill) {
            setShow(true)
            setType('error')
            setMessage('You still have orders in the kitchen')
            return
        }
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