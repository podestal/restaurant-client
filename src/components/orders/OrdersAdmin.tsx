import useGetOrders from "../../hooks/api/order/useGetOrders"
import useAuthStore from "../../hooks/store/useAuthStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import useLoader from "../../hooks/ui/useLoader"
import OrderAdminCard from "./OrderAdminCard"
import { motion } from 'framer-motion'

const OrdersAdmin = () => {

    const access = useAuthStore(s => s.access) || ''
    const {data: orders, isLoading, isError, error, isSuccess} = useGetOrders({ access })
    const lan = useLanguageStore(s => s.lan)

    useLoader(isLoading)

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 ">
        <div className="w-full flex justify-start items-center gap-12">
            <div className="w-full grid grid-cols-6 gap-6 dark:bg-slate-900 bg-gray-200 font-bold p-2 mt-6">
                <p>Id</p>
                <p>{lan === 'EN' ? 'Type' : 'Tipo'}</p>
                <p>Status</p>
                <p className="col-span-2">{lan === 'EN' ? 'Created by' : 'Creado por'}</p>
                <p>{lan === 'EN' ? 'Dishes' : 'Platos'}</p>
            </div>
            <div className="w-[24px] h-[24px]"/>
        </div>
        {orders.map( order => (
            <OrderAdminCard 
                key={order.id}
                order={order}
            />
        ))}
    </motion.div>
  )
}

export default OrdersAdmin