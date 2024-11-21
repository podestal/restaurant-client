import { OrderItem } from "../../services/api/orderItemService"
import MostSold from "./MostSold"
import OrderItemTable from "./OrderItemTable"
import TotalDishes from "./TotalDishes"
import TotalSale from "./TotalSale"

interface Props {
    orderItems: OrderItem[]
    month: number
    setMonth: React.Dispatch<React.SetStateAction<number>>
    year: number
    setYear: React.Dispatch<React.SetStateAction<number>>
}

const OrderItemsDashboard = ({ orderItems, month, setMonth, year, setYear }: Props) => {

    const total = orderItems.reduce(( total, orderItem ) => {
        return total += (orderItem.cost * orderItem.quantity)
    }, 0)

    const totalDishes = orderItems.reduce(( total, orderItem) => {
        return total += orderItem.quantity
    }, 0)
    

  return (
    <div className="pb-20">
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
        <OrderItemTable 
            orderItems={orderItems}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
        />
        {/* <div className="flex flex-col justify-start gap-6 dark:bg-slate-900 bg-slate-100 mt-10 py-10 px-10 rounded-3xl">
            {orderItems.map(orderItem => (
                <SingleOrderItem 
                    key={orderItem.id}
                    orderItem={orderItem}
                />
            ))}
        </div> */}

    </div>
  )
}

export default OrderItemsDashboard