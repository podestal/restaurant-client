import useGetOrderItems from "../hooks/api/orderItem/useGetOrderItems"
import useAuthStore from "../hooks/store/useAuthStore"

const DashboardPage = () => {

    const access = useAuthStore(s => s.access) || ''
    const {data: orderItems, isLoading, isError, error, isSuccess} = useGetOrderItems({ access })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="2xl:max-w-[1280px] mx-auto mt-4">
        {orderItems.map( orderItem => (
            <div
                key={orderItem.id}
            >
                <p>{orderItem.name}</p>
            </div>
        ))}
    </div>
  )
}

export default DashboardPage