import { OrderItem } from "../../services/api/orderItemService"
import MostSold from "./MostSold"
import TotalDishes from "./TotalDishes"
import TotalSale from "./TotalSale"

interface Props {
    orderItems: OrderItem[]
}

const OrderItemsDashboard = ({ orderItems }: Props) => {

    const total = orderItems.reduce(( total, orderItem ) => {
        return total += (orderItem.cost * orderItem.quantity)
    }, 0)

    const totalDishes = orderItems.reduce(( total, orderItem) => {
        return total += orderItem.quantity
    }, 0)

  return (
    <div className="w-full grid grid-cols-3 gap-12 mt-12">
        <TotalSale 
            totalSales={total}
        />
        <TotalDishes 
            totalDishes={totalDishes}
        />
        <MostSold 

        />
    </div>
  )
}

export default OrderItemsDashboard