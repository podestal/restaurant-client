import { RiDeleteBin2Fill } from "@remixicon/react"
import useAuthStore from "../../hooks/store/useAuthStore"
import useRemovePromotionItem from "../../hooks/api/promotionItem/useRemovePromotionItem"

interface Props {
    promotionId: number
    promotionItemId: number
}

const RemovePromotionItem = ({ promotionItemId, promotionId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const removePromotionItem = useRemovePromotionItem({ promotionItemId, promotionId })

    const handleRemove = () => {
        removePromotionItem.mutate({ access })
    }

  return (
    <RiDeleteBin2Fill 
        className="text-red-600 hover:text-red-700 cursor-pointer"
        onClick={handleRemove}
    />
  )
}

export default RemovePromotionItem