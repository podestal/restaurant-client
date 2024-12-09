import { Promotion } from "../../services/api/promotionService"

interface Props {
    promotion: Promotion 
}

const PromotionItemsForm = ({ promotion }: Props) => {
  return (
    <div>Add your dishes for promotion {promotion.name}</div>
  )
}

export default PromotionItemsForm