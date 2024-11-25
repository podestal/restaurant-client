import useCreateOrder from "../../hooks/api/order/useCreateOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"

interface Props {
    tableId?: number
    orderType?: string
}

const CreateOrder = ({ tableId, orderType='I' }: Props) => {

    const userId = useAuthStore(s => s.userId)
    const access = useAuthStore(s => s.access) || ''
    const createOrder = useCreateOrder({ tableId })
    const table = tableId ? tableId : null
    const buttonLabel = orderType === 'I' ? 'New Order' : 'Place Order'

    const handleCreateOrder = () => {
        createOrder.mutate({ order: { created_by: userId, table, status: 'P', order_type:orderType
         }, access })
    }

  return (
    <div>
        <Button 
            label={buttonLabel}
            onClick={handleCreateOrder}
        />
    </div>
  )
}

export default CreateOrder