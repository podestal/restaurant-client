import useUpdateOrder from "../../hooks/api/order/useUpdateOrder"
import useAuthStore from "../../hooks/store/useAuthStore"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { Order } from "../../services/api/orderService"
import Button from "../ui/Button"

interface Props {
    tableId: number
    order: Order
    setEnableCreateOrder: React.Dispatch<React.SetStateAction<boolean>>
    lan: string
}

const UpdateOrder = ({ tableId, order, setEnableCreateOrder, lan }: Props) => {

    const updateOrder = useUpdateOrder({ tableId, orderId: order.id })
    const { setShow, setType, setMessage } = useNotificationsStore()
    const access = useAuthStore(s => s.access) || ''
    const userId = useAuthStore(S => S.userId)

    const handleUpdate = () => {

        if (order.order_items?.length === 0) {
            setShow(true)
            setType('error')
            setMessage(lan === 'EN' ? 'You need to add some dishes first' : 'Primero debes agregar platillos')
            return
        }
        
        updateOrder.mutate({ updates: { table: tableId, status: 'S', created_by: userId, order_type:'I' }, access }, {
            onSuccess: () => {
                setEnableCreateOrder(true)
            }
        })
    }

  return (
    <div>
        <Button 
            label={lan === 'EN' ? "Send to kitchen" : 'Enviar a cocina'}
            onClick={handleUpdate}
        />
    </div>
  )
}

export default UpdateOrder