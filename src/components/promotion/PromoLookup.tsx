import useGetPromotion from "../../hooks/api/promotion/useGetPromotions"

interface Props {
    setShowPromos: React.Dispatch<React.SetStateAction<boolean>>
    setPromoLookup: React.Dispatch<React.SetStateAction<string>>
    setPromotion: React.Dispatch<React.SetStateAction<number>>
}

const PromoLookup = ({
    setPromoLookup,
    setShowPromos,
    setPromotion,
}: Props) => {

    const {data: promotions, isLoading, isError, error, isSuccess} = useGetPromotion()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p className="animate-pulse">Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="flex flex-col gap-4">
        {promotions
            .filter( promotion => promotion.is_active)
            .map( promotion => (
            <p 
            onClick={() => {
                setPromoLookup(promotion.name)
                setShowPromos(false)
                setPromotion(promotion.id)
            }}
            className="py-2 px-4 bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-3xl"
            key={promotion.id}>
                {promotion.name}
            </p>
        ))}
    </div>
  )
}

export default PromoLookup