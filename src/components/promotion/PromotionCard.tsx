import { Promotion } from "../../services/api/promotionService"

interface Props {
    promotion: Promotion
}

const PromotionCard = ({ promotion }: Props) => {
  return (
    <div className="w-full">
        <h2 className="text-2xl">{promotion.name}</h2>
        <p>{promotion.description}</p>
    </div>
  )
}

export default PromotionCard