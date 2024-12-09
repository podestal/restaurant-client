import { Promotion } from "../../services/api/promotionService"

interface Props {
    promotion: Promotion
}

const PromotionCard = ({ promotion }: Props) => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-[140px] border-2 border-slate-200 dark:border-slate-900 rounded-2xl shadow-xl shadow-slate-700 dark:shadow-slate-700 relative">
        <h2 className="text-2xl mt-6 text-blue-700 font-bold mb-2">{promotion.name}</h2>
        <p className="text-sm dark:text-slate-300 mx-6">{promotion.description}</p>
        <div className={`absolute top-0 left-6 w-[20px] h-full ${promotion.is_active ? 'bg-green-600' : 'dark:bg-neutral-500 bg-neutral-300'}`}/>
    </div>
  )
}

export default PromotionCard