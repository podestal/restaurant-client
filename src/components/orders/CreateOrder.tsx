import useCreateOrder from "../../hooks/api/order/useCreateOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import Button from "../ui/Button"

interface Props {
    tableId?: number
    orderType?: "I" | "D" | "T"
    status?: "P" | "S" | "C"
    cart?: number
}

const CreateOrder = ({ tableId, orderType='I', status='P', cart }: Props) => {

    const userId = useAuthStore(s => s.userId)
    const access = useAuthStore(s => s.access) || ''
    const createOrder = useCreateOrder({ tableId, cart })
    const table = tableId ? tableId : null
    const lan = useLanguageStore(s => s.lan)
    const buttonLabel = orderType === 'I' ? `${lan === 'EN' ? 'New Order' : 'Nueva Orden'}` : `${lan === 'EN' ? 'Place Order' : 'Enviar Pedido'}`

    const handleCreateOrder = () => {
        createOrder.mutate({ order: { created_by: userId, table, status, order_type:orderType
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