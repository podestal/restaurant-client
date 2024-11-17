import useUpdateOrder from "../../hooks/api/order/useUpdateOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import { Order } from "../../services/api/orderService"
import Button from "../ui/Button"

interface Props {
    tableId: number
    order: Order
}

const UpdateOrder = ({ tableId, order }: Props) => {

    const updateOrder = useUpdateOrder({ tableId, orderId: order.id })
    const access = useAuthStore(s => s.access) || ''
    const userId = useAuthStore(S => S.userId)

    const handleUpdate = () => {
        updateOrder.mutate({ updates: { table: tableId, status: 'S', created_by: userId }, access })
    }

  return (
    <div>
        <Button 
            label="Send to kitchen"
            onClick={handleUpdate}
        />
    </div>
  )
}

export default UpdateOrder