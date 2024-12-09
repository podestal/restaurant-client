import useGetPromotion from "../../hooks/api/promotion/useGetPromotions"
import useLoader from "../../hooks/ui/useLoader"
import CreatePromotion from "./CreatePromotion"
import PromotionCard from "./PromotionCard"


const Promotions = () => {

    const {data: promotions, isLoading, isError, error, isSuccess} = useGetPromotion()

    useLoader(isLoading)

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        <CreatePromotion />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {promotions.map( promotion => (
                <PromotionCard 
                    key={promotion.id}
                    promotion={promotion}
                />
            ))}
        </div>
    </div>
  )
}

export default Promotions