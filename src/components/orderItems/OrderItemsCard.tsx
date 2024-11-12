import { OrderItem } from "../../services/api/orderItemService"

interface Props {
    orderItem: OrderItem
}

const OrderItemsCard = ({ orderItem }: Props) => {
  return (
    <div>
        {orderItem.id}
    </div>
  )
}

export default OrderItemsCard