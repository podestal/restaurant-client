import useGetOrders from "../../hooks/api/order/useGetOrders"
import useAuthStore from "../../hooks/store/useAuthStore"
import OrderAdminCard from "./OrderAdminCard"

const OrdersAdmin = () => {

    const access = useAuthStore(s => s.access) || ''
    const {data: orders, isLoading, isError, error, isSuccess} = useGetOrders({ access })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="mt-20">
        <div className="w-full grid grid-cols-6 dark:bg-slate-900 bg-gray-200 font-bold p-2 mt-6">
            <p>Id</p>
            <p>Type</p>
            <p>Status</p>
            <p className="col-span-2">Created by</p>
            <p>Dishes</p>
        </div>
        {orders.map( order => (
            <OrderAdminCard 
                key={order.id}
                order={order}
            />
        ))}
    </div>
  )
}

export default OrdersAdmin