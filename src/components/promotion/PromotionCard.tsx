import { Promotion } from "../../services/api/promotionService"
import PromotionItems from "../promotionItem/PromotionItems"

interface Props {
    promotion: Promotion
}

const PromotionCard = ({ promotion }: Props) => {
  return (
    <div>
        <h2 className="text-2xl">{promotion.name}</h2>
        <PromotionItems 
            promotionItems={promotion.items}
        />
    </div>
  )
}

export default PromotionCard