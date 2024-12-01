import { useState } from "react"
import { OrderItem } from "../../services/api/orderItemService"
import MostSold from "./MostSold"
import OrderItemTable from "./OrderItemTable"
import TotalDishes from "./TotalDishes"
import TotalSale from "./TotalSale"
import moment from "moment"
import { OrdersChart, SalesByCategoryBarChart } from "../ui/Charts"
import { orderItemsSalesByCategory, transformOrderItems } from "../../utils/utilities"
import useThemeStore from "../../hooks/store/useThemeStore"

interface Props {
    orderItems: OrderItem[]
    month: number
    setMonth: React.Dispatch<React.SetStateAction<number>>
    year: number
    setYear: React.Dispatch<React.SetStateAction<number>>
}

const OrderItemsDashboard = ({ orderItems, month, setMonth, year, setYear }: Props) => {

    const [timeFilter, setTimeFilter] = useState(1)
    const currentMonth = moment(month, "M").format("MMMM")
    const theme = useThemeStore(s => s.theme)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
    const filteredOrderItems = orderItems.filter( orderItem => timeFilter === 2 ? (orderItem.created_at).toString() === moment(selectedDate).format('YYYY-MM-DD') : orderItem)

    const total = filteredOrderItems.reduce(( total, orderItem ) => {
        return total += (orderItem.cost * orderItem.quantity)
    }, 0)

    const totalDishes = filteredOrderItems.reduce(( total, orderItem) => {
        return total += orderItem.quantity
    }, 0)
    const data = transformOrderItems(filteredOrderItems)
    const catsData = orderItemsSalesByCategory(filteredOrderItems)

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
        {catsData.length > 0 && <div className="w-full h-64 my-20 flex flex-col justify-center items-center gap-12">
            <h2 className="text-xl">Sales by Category</h2>
            <SalesByCategoryBarChart 
                data={catsData}
                theme={theme}
            />
        </div>}
        {data.length > 0 && timeFilter === 1 && 
        <div className="w-full h-64 my-20 flex flex-col justify-center items-center gap-12">
            <h2 className="text-xl">{currentMonth}'s Sales</h2>
            <OrdersChart 
                data={data}
                theme={theme}
            />
        </div>}

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