import { PromotionItem } from "../../services/api/promotionItemService"
import { motion } from "framer-motion"
import RemovePromotionItem from "./RemovePromotionItem"

interface Props {
    promotionId: number
    promotionItem: PromotionItem
}

const PromotionItemCard = ({ promotionItem, promotionId }: Props) => {
  return (
    <motion.div 
        layout
        className="w-full flex justify-between items-start my-4">
        <div className="flex justify-center items-center gap-4">
            <RemovePromotionItem 
                promotionItemId={promotionItem.id}
                promotionId={promotionId}
            />
            <p>{promotionItem.name}</p>
        </div>
        <p>{promotionItem.quantity}</p>
    </motion.div>
  )
}

export default PromotionItemCard