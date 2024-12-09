import { Promotion } from "../../services/api/promotionService"

interface Props {
    promotion: Promotion
}

const PromotionInfo = ({ promotion }: Props) => {
  return (
    <div>
        <div className="flex w-full items-center justify-between mt-6 mb-4">
            <p className={`px-4  rounded-2xl ${promotion.is_active ? 'bg-green-600' : 'dark:bg-neutral-500 bg-neutral-300'}`}>{promotion.is_active ? 'Active' : 'Not Active'}</p>
            <p className="text-xl">$.{promotion.amount}</p>
        </div>
        <h2 className="text-2xl font-poppins font-bold mb-2">{promotion.name}</h2>
        <p className="text-sm dark:text-neutral-400">{promotion.description}</p>
    </div>
  )
}

export default PromotionInfo