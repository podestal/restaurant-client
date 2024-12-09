import { PromotionItem } from "../../services/api/promotionItemService"
import { motion } from "framer-motion"

interface Props {
    promotionItem: PromotionItem
}

const PromotionItemCard = ({ promotionItem }: Props) => {
  return (
    <motion.div 
        layout
        className="w-full flex justify-between items-start my-4">
        <p>{promotionItem.name}</p>
        <p>{promotionItem.quantity}</p>
    </motion.div>
  )
}

export default PromotionItemCard