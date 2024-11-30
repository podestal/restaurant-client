import { useState } from "react"
import { OrderItem } from "../../services/api/orderItemService"
import MostSold from "./MostSold"
import OrderItemTable from "./OrderItemTable"
import TotalDishes from "./TotalDishes"
import TotalSale from "./TotalSale"
import moment from "moment"

interface Props {
    orderItems: OrderItem[]
    month: number
    setMonth: React.Dispatch<React.SetStateAction<number>>
    year: number
    setYear: React.Dispatch<React.SetStateAction<number>>
}

const OrderItemsDashboard = ({ orderItems, month, setMonth, year, setYear }: Props) => {

    const [timeFilter, setTimeFilter] = useState(1)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
    // const filteredOrderItems = orderItems && orderItems.filter( orderItem => orderItem.created_at.toString().split('-')[2] === dayFilter.toString())
    const filteredOrderItems = orderItems.filter( orderItem => timeFilter === 2 ? (orderItem.created_at).toString() === moment(selectedDate).format('YYYY-MM-DD') : orderItem)
    // const filteredOrderItems = orderItems.filter( orderItem => )

    const total = filteredOrderItems.reduce(( total, orderItem ) => {
        return total += (orderItem.cost * orderItem.quantity)
    }, 0)

    const totalDishes = filteredOrderItems.reduce(( total, orderItem) => {
        return total += orderItem.quantity
    }, 0)
    

  return (
    <div className="pb-20">
        <div className="w-full grid grid-cols-3 gap-12 mt-12">
            <TotalSale 
                totalSales={total}
                timeFilter={timeFilter}
            />
            <TotalDishes 
                totalDishes={totalDishes}
                timeFilter={timeFilter}
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
            timeFilter={timeFilter}
            setTimeFilter={setTimeFilter}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        />
    </div>
  )
}

export default OrderItemsDashboard