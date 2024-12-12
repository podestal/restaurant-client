import { SimpleOrderItem } from "../../services/api/orderService"
import OrderItemsCard from "./OrderItemsCard"

interface Props {
    orderItems: SimpleOrderItem[]
    editable: boolean
    tableId: number
}

const OrderItems = ({ orderItems, editable, tableId }: Props) => {

  // const items: any[] = []
  // orderItems.map( orderItem => {
  //   if (orderItem.promotion === null) {
  //     items.push(orderItem)
  //   } else {
  //     return orderItem.promotion.items.map(promoItem => {
  //       items.push(promoItem)
  //     })
  //   }
  // })

  const items = orderItems.flatMap( orderItem => 
    orderItem.promotion === null 
      ? [orderItem]
      : orderItem.promotion.items
  )

  console.log('sanitized items', items);
  

  return (
    <div className={`my-6 w-full`}>
        {orderItems.map( orderItem => (
            <OrderItemsCard 
                key={orderItem.id}
                orderItem={orderItem}
                editable={editable}
                tableId={tableId}
            />
        ))}
    </div>
  )
}

export default OrderItems