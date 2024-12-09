import useGetPromotionItems from "../../hooks/api/promotionItem/useGetPromotionItems"
import PromotionItemsForm from "./PromotionItemsForm"

interface Props {
    promotionId: number
    showForm?: boolean
}

const PromotionItems = ({ promotionId, showForm }: Props) => {

    const {data: promotionItems, isLoading, isError, error, isSuccess } = useGetPromotionItems({ promotionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {promotionItems.length > 0 && promotionItems.map( item => (
            <p>{item.name}</p>
        ))}
        {showForm && 
        <PromotionItemsForm 
            promotionId={promotionId}
        />}
    </div>
  )
}

export default PromotionItems