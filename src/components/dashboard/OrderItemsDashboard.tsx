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
import { motion } from "framer-motion"
import useLanguageStore from "../../hooks/store/useLanguageStore"

interface Props {
    orderItems: OrderItem[]
    month: number
    setMonth: React.Dispatch<React.SetStateAction<number>>
    year: number
    setYear: React.Dispatch<React.SetStateAction<number>>
}

const monthsTranslation: Record<string, string> = {
        January: "Enero",
        February: "Febrero",
        March: "Marzo",
        April: "Abril",
        May: "Mayo",
        June: "Junio",
        July: "Julio",
        August: "Agosto",
        September: "Septiembre",
        October: "Octubre",
        November: "Noviembre",
        December: "Diciembre",
    }

    const translateMonth = (month: string) => {
        return monthsTranslation[month]
    }

const OrderItemsDashboard = ({ orderItems, month, setMonth, year, setYear }: Props) => {
    
    const lan = useLanguageStore(s => s.lan)
    const [timeFilter, setTimeFilter] = useState(1)
    
    const currentMonth = moment().month(month - 1).format("MMMM");
    const monthLan = translateMonth(currentMonth)
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
        <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full grid grid-cols-3 gap-12 mt-12">
            <TotalSale 
                totalSales={total}
                timeFilter={timeFilter}
                lan={lan}
            />
            <TotalDishes 
                totalDishes={totalDishes}
                timeFilter={timeFilter}
                lan={lan}
            />
            <MostSold 

            />
        </motion.div>
        {data.length > 0 && timeFilter === 1 && 
        <div className="w-full h-64 my-20 flex flex-col justify-center items-center gap-12">
            {/* {currentMonth}'s Sales */}
            <h2 className="text-xl">{lan === 'EN' ? `${currentMonth}'s Sales` : `Ventas en ${monthLan}`}</h2>
            <OrdersChart 
                data={data}
                theme={theme}
            />
        </div>}
        {catsData.length > 0 && <div className="w-full h-64 my-20 flex flex-col justify-center items-center gap-12">
            <h2 className="text-xl">{lan === 'EN' ? 'Sales by Category' : 'Ventas por Categoría'}</h2>
            <SalesByCategoryBarChart 
                data={catsData}
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
            lan={lan}
        />
    </div>
  )
}

export default OrderItemsDashboard