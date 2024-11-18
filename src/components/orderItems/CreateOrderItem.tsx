import useCreateOrderItem from "../../hooks/api/orderItem/useCreateOrderItem"
import OrderItemForm from "./OrderItemForm"

interface Props {
    tableId: number
    orderId: number
    billId: number
}

const CreateOrderItem = ({ tableId, orderId, billId }: Props) => {

    const createOrderItem = useCreateOrderItem({ tableId })
    console.log('orderId in create order item', orderId);
    

  return (
    <OrderItemForm 
        createOrderItem={createOrderItem}
        orderId={orderId}
        billId={billId}
    />
  )
}

export default CreateOrderItem