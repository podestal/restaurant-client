import { Promotion } from "../../services/api/promotionService"
import PromotionItems from "../promotionItem/PromotionItems"

interface Props {
    promotion: Promotion
}

const PromotionCard = ({ promotion }: Props) => {
  return (
    <div className="w-full">
        <h2 className="text-2xl">{promotion.name}</h2>
        <PromotionItems 
            promotionId={promotion.id}
        />
    </div>
  )
}

export default PromotionCard