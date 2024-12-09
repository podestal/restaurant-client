import useGetPromotionItems from "../../hooks/api/promotionItem/useGetPromotionItems"
import PromotionItemCard from "./PromotionItemCard"
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
    <div className="w-full flex flex-col justify-center items-center border-t-2 border-t-slate-700 mt-10">
        {/* <h2 className="text-xl font-poppins font-bold py-6">Promotion's Dishes</h2> */}
        {promotionItems.length > 0 && promotionItems.map( item => (
            <PromotionItemCard 
                key={item.id}
                promotionItem={item}
                promotionId={promotionId}
            />
        ))}
        {showForm && 
        <PromotionItemsForm 
            promotionId={promotionId}
        />}
    </div>
  )
}

export default PromotionItems