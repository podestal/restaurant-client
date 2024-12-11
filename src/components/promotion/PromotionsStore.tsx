import useGetPromotion from "../../hooks/api/promotion/useGetPromotions"
import useLoader from "../../hooks/ui/useLoader"
import PromotionStoreCard from "./PromotionStoreCard"

const PromotionsStore = () => {

    const {data: promotions, isLoading, isError, error, isSuccess} = useGetPromotion()

    useLoader(isLoading)

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <>
        <h2
            className="text-5xl font-bold font-poppins text-blue-700"
            id="promotions"
        >Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {promotions.map(promotion => (
                <PromotionStoreCard 
                    key={promotion.id}
                    promotion={promotion}
                />
            ))}
        </div>
    </>
  )
}

export default PromotionsStore