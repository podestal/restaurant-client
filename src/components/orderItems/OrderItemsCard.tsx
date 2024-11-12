import { SimpleOrderItem } from "../../services/api/orderService"

interface Props {
    orderItem: SimpleOrderItem
}

const OrderItemsCard = ({ orderItem }: Props) => {
  return (
    <div>
        {orderItem.name}
    </div>
  )
}

export default OrderItemsCard