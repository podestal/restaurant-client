import OrderItems from "../components/orderItems/OrderItems"
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
            <div 
              key={order.id}
              className="w-full flex flex-col justify-start items-start gap-2 px-8 my-2">
              <OrderItems 
                  orderItems={order.order_items}
                  editable={false}
                  tableId={0}
              />
              {/* <div className="w-full flex justify-between items-center mx-auto">
                  <p className="font-bold font-poppins">{orderItem.name}</p>
                  <p>{orderItem.quantity}</p>
              </div>
              <p className="text-slate-400">- {orderItem.observations}</p> */}
          </div>
        ))}
    </div>
  )
}

export default KitchenPage