import { Promotion } from "../../services/api/promotionService"

interface Props {
    promotion: Promotion
}

const PromotionCard = ({ promotion }: Props) => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-[180px] border-2 border-slate-200 dark:border-slate-900 rounded-2xl shadow-xl shadow-slate-700 dark:shadow-slate-700 cursor-pointer hover:opacity-70 relative">
        <div className="w-[70%] flex items-center justify-between mt-6 mb-2">
            <h2 className="text-2xl text-blue-700 font-bold">{promotion.name}</h2>    
            <p className="text-xl font-bold">{promotion.amount}</p>
        </div>
        <div className="w-[70%]">
            <p className="text-sm dark:text-slate-300">{promotion.description}</p>
        </div>
        <div className={`absolute top-0 left-6 w-[20px] h-full ${promotion.is_active ? 'bg-green-600' : 'dark:bg-neutral-500 bg-neutral-300'}`}/>
    </div>
  )
}

export default PromotionCard