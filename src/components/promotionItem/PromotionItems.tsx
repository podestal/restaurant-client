import useGetPromotionItems from "../../hooks/api/promotionItem/useGetPromotionItems"

interface Props {
    promotionId: number
}

const PromotionItems = ({ promotionId }: Props) => {

    const {data: promotionItems, isLoading, isError, error, isSuccess } = useGetPromotionItems({ promotionId })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        {promotionItems.length > 0 && promotionItems.map( item => (
            <p>{item.name}</p>
        ))}
    </div>
  )
}

export default PromotionItems