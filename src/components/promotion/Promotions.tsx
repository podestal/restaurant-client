import useGetPromotion from "../../hooks/api/promotion/useGetPromotions"
import useLoader from "../../hooks/ui/useLoader"
import CreatePromotion from "./CreatePromotion"
import PromotionCard from "./PromotionCard"
import { motion, AnimatePresence } from 'framer-motion'

const Promotions = () => {

    const {data: promotions, isLoading, isError, error, isSuccess} = useGetPromotion()

    useLoader(isLoading)

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        <CreatePromotion />
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}  
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                {promotions.map( promotion => (
                    <PromotionCard 
                        key={promotion.id}
                        promotion={promotion}
                    />
                ))}
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Promotions