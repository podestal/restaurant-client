import useCreateOrderItem from "../../hooks/api/orderItem/useCreateOrderItem"
import OrderItemForm from "./OrderItemForm"

interface Props {
    tableId: number
    orderId: number
}

const CreateOrderItem = ({ tableId, orderId }: Props) => {

    const createOrderItem = useCreateOrderItem({ tableId })
    console.log('orderId in create order item', orderId);
    

  return (
    <OrderItemForm 
        createOrderItem={createOrderItem}
        orderId={orderId}
    />
  )
}

export default CreateOrderItem