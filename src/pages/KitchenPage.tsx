import SimpleOrderCard from "../components/orders/SimpleOrderCard"
import useGetOrders from "../hooks/api/order/useGetOrders"
import useAuthStore from "../hooks/store/useAuthStore"

const KitchenPage = () => {

    const access = useAuthStore(s => s.access) || ''
    const {data: orders, isLoading, isError, error, isSuccess} = useGetOrders({ access, status: 'S' })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="2xl:max-w-[1280px] mx-auto mt-4 grid grid-cols-3">
        {orders.map( order => (
          <SimpleOrderCard 
            key={order.id}
            order={order}
          />
        ))}
    </div>
  )
}

export default KitchenPage