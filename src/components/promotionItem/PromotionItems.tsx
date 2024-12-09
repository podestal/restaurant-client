import { PromotionItem } from "../../services/api/promotionItemService"

interface Props {
    promotionItems: PromotionItem[]
}

const PromotionItems = ({ promotionItems }: Props) => {
  return (
    <div>
        {promotionItems.map( item => (
            <p>{item.name}</p>
        ))}
    </div>
  )
}

export default PromotionItems