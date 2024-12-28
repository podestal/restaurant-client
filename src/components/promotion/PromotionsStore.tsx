import useGetPromotion from "../../hooks/api/promotion/useGetPromotions"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import useLoader from "../../hooks/ui/useLoader"
import { Cart } from "../../services/api/cartService"
import PromotionStoreCard from "./PromotionStoreCard"
import { motion } from "framer-motion"

interface Props {
    cart: Cart
}

const PromotionsStore = ({ cart }: Props) => {

    const {data: promotions, isLoading, isError, error, isSuccess} = useGetPromotion()
    const lan = useLanguageStore(s => s.lan)

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
        >{lan === 'EN' ? 'Promotions' : 'Promociones'}</h2>
        <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {promotions
            .filter( promotion => promotion.is_active)
            .map(promotion => (
                <PromotionStoreCard 
                    key={promotion.id}
                    promotion={promotion}
                    cart={cart}
                />
            ))}
        </div>
    </motion.div>
  )
}

export default PromotionsStore