import { useState } from "react"
import OrderItemsDashboard from "../components/dashboard/OrderItemsDashboard"
import useGetOrderItems from "../hooks/api/orderItem/useGetOrderItems"
import useAuthStore from "../hooks/store/useAuthStore"

const DashboardPage = () => {

    const today = new Date()
    const [month, setMonth] = useState(today.getMonth() + 1)
    const [year, setYear] = useState(today.getFullYear())
    const access = useAuthStore(s => s.access) || ''
    const {data: orderItems, isLoading, isError, error, isSuccess} = useGetOrderItems({ access, date: 'yes', dateParams: { year, month } })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <OrderItemsDashboard 
      orderItems={orderItems}
      month={month}
      setMonth={setMonth}
      year={year}
      setYear={setYear}
    />
  ) 
}

export default DashboardPage