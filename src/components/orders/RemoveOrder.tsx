import useRemoveOrder from "../../hooks/api/order/useRemoveOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"

interface Props {
    canRemoveOrder: boolean
    orderId: number
    tableId: number
    setEnableCreateOrder: React.Dispatch<React.SetStateAction<boolean>>
}

const RemoveOrder = ({ canRemoveOrder, orderId, tableId, setEnableCreateOrder }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const removeOrder = useRemoveOrder({orderId, tableId})

    const handleRemove = () => {
        removeOrder.mutate({ access }, {
            onSuccess: () => setEnableCreateOrder(true)
        })
    }

  return (
    <Button 
        label="Remove"
        color="red"
        disable={canRemoveOrder}
        onClick={handleRemove}
    />
  )
}

export default RemoveOrder