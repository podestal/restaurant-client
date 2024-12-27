import { PromotionItem } from "../../services/api/promotionItemService"
import { motion } from "framer-motion"
import RemovePromotionItem from "./RemovePromotionItem"
import { useState } from "react"
import useLanguageStore from "../../hooks/store/useLanguageStore"

interface Props {
    promotionId: number
    promotionItem: PromotionItem
}

const PromotionItemCard = ({ promotionItem, promotionId }: Props) => {

  const [loading, setLoading] = useState(false)
  const lan = useLanguageStore(s => s.lan)

  return (
    <motion.div 
        layout
        className="w-full flex justify-between items-start my-4">
        {loading 
        ? 
        <div className="w-full flex justify-center items-center">
          <h2 className="text-xl animate-pulse">{lan === 'EN' ? "Removing Dish ..." : 'Eliminando Plato'}</h2>
        </div>
        : 
        <>
        <div className="flex justify-center items-center gap-4">
            <RemovePromotionItem 
                promotionItemId={promotionItem.id}
                promotionId={promotionId}
                setLoading={setLoading}
            />
            <p>{promotionItem.name}</p>
        </div>
        <p>{promotionItem.quantity}</p>
        </>
        }
    </motion.div>
  )
}

export default PromotionItemCard