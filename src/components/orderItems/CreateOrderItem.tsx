import useCreateOrderItem from "../../hooks/api/orderItem/useCreateOrderItem"
import OrderItemForm from "./OrderItemForm"

interface Props {
    tableId: number
}

const CreateOrderItem = ({ tableId }: Props) => {

    const createOrderItem = useCreateOrderItem({ tableId })

  return (
    <OrderItemForm 
        createOrderItem={createOrderItem}
    />
  )
}

export default CreateOrderItem