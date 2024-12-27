import { useState } from "react"
import useCreateOrder from "../../hooks/api/order/useCreateOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import Button from "../ui/Button"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

interface Props {
    tableId?: number
    orderType?: "I" | "D" | "T"
    status?: "P" | "S" | "C"
    cart?: number
}

const CreateOrder = ({ tableId, orderType='I', status='P', cart }: Props) => {

    const { setShow, setType, setMessage } = useNotificationsStore()
    const userId = useAuthStore(s => s.userId)
    const access = useAuthStore(s => s.access) || ''
    const createOrder = useCreateOrder({ tableId, cart })
    const table = tableId ? tableId : null
    const lan = useLanguageStore(s => s.lan)
    const [loading, setLoading] = useState(false)
    const buttonLabel = orderType === 'I' ? `${lan === 'EN' ? 'New Order' : 'Nueva Orden'}` : `${lan === 'EN' ? 'Place Order' : 'Enviar Pedido'}`
    const buttonLabelLoading = orderType === 'I' ? `${lan === 'EN' ? 'Creating' : 'creando'}` : `${lan === 'EN' ? 'Placing' : 'Enviando'}`

    const handleCreateOrder = () => {
        setLoading(true)
        createOrder.mutate({ order: { created_by: userId, table, status, order_type:orderType
         }, access }, {
            onError: err => {
              setShow(true)
              setType('error')
              setMessage(`Error: ${err}`)
            },
            onSettled: () => setLoading(false)
         })
    }

  return (
    <div>
        {loading 
        ? 
        <Button 
            label={buttonLabelLoading}
            disable={true}
        />
        :
        <Button 
            label={buttonLabel}
            onClick={handleCreateOrder}
        />
        }
    </div>
  )
}

export default CreateOrder