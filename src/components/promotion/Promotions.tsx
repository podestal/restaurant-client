import useGetPromotion from "../../hooks/api/promotion/useGetPromotions"
import useLoader from "../../hooks/ui/useLoader"
import CreatePromotion from "./CreatePromotion"


const Promotions = () => {

    const {data: promotions, isLoading, isError, error, isSuccess} = useGetPromotion()

    useLoader(isLoading)

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        <CreatePromotion />
        {promotions.map( promotion => (
            <p>{promotion.name}</p>
        ))}
    </div>
  )
}

export default Promotions