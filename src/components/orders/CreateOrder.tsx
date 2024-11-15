import useCreateOrder from "../../hooks/api/order/useCreateOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"

interface Props {
    tableId: number
}

const CreateOrder = ({ tableId }: Props) => {

    const userId = useAuthStore(s => s.userId)
    const access = useAuthStore(s => s.access) || ''
    const createOrder = useCreateOrder({ tableId })

    const handleCreateOrder = () => {
        createOrder.mutate({ order: { created_by: userId, table: tableId }, access })
    }

  return (
    <div>
        <Button 
            label="New Order"
            onClick={handleCreateOrder}
        />
    </div>
  )
}

export default CreateOrder