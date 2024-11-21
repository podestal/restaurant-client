import { OrderItem } from "../../services/api/orderItemService"
import moment from "moment"

interface Props {
    orderItem: OrderItem
}

const SingleOrderItem = ({ orderItem }: Props) => {

    const createdAt = moment(orderItem.created_at).format('DD MMM YYYY')

  return (
    <div className="w-full grid grid-cols-7">
        <p>{orderItem.id}</p>
        <p className="col-span-2">{orderItem.name}</p>
        <p>{createdAt}</p>
        <p>{orderItem.quantity}</p>
        <p>{orderItem.cost}</p>
        <p>{(orderItem.quantity * orderItem.cost).toFixed(2)}</p>
    </div>
  )
}

export default SingleOrderItem