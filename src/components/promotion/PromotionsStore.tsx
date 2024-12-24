import useGetPromotion from "../../hooks/api/promotion/useGetPromotions"
import useLoader from "../../hooks/ui/useLoader"
import PromotionStoreCard from "./PromotionStoreCard"
import { motion } from "framer-motion"

const PromotionsStore = () => {

    const {data: promotions, isLoading, isError, error, isSuccess} = useGetPromotion()

    useLoader(isLoading)

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2
            className="text-5xl font-bold font-poppins text-blue-700"
            id="promotions"
        >Promotions</h2>
        <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {promotions
            .filter( promotion => promotion.is_active)
            .map(promotion => (
                <PromotionStoreCard 
                    key={promotion.id}
                    promotion={promotion}
                />
            ))}
        </div>
    </motion.div>
  )
}

export default PromotionsStore