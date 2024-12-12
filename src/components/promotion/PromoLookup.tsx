import { motion } from "framer-motion"
import useGetPromotion from "../../hooks/api/promotion/useGetPromotions"
import Input from "../ui/Input"
import { useState } from "react"

interface Props {
    // setPromo: React.Dispatch<React.SetStateAction<number>>
    // setCost?: React.Dispatch<React.SetStateAction<number>>
    // setPromoLookup: React.Dispatch<React.SetStateAction<string>>
    // promoLookup: string
    // promoError: string
    // setPromoError: React.Dispatch<React.SetStateAction<string>>
}

const PromoLookup = ({
    // setPromo,
    // setCost,
    // setPromoLookup,
    // promoLookup,
    // promoError,
    // setPromoError
}: Props) => {

    const [showPromos, setShowPromos] = useState(false)
    const {data: promotions, isLoading, isError, error, isSuccess} = useGetPromotion()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p className="animate-pulse">Error: {error.message}</p>

    if (isSuccess)

  return (
    // <div className="col-span-3">
    //     <Input 
    //         placeholder="Dish ..."
    //         value={promoLookup}
    //         onChange={e => {
    //             if (promoLookup.length > 0) {
    //                 setPromoError('')
    //             }
    //             if (!promoLookup && promoLookup.length > 0) {
    //                 setShowPromos(true)
    //             }
    //             setPromoLookup(e.target.value)
    //         }}
    //         error={promoError}
    //     />
    //     <motion.div
    //         initial={{opacity: 0, translateY: -30}}
    //         whileInView={{opacity: 1, translateY: 0}}
    //         transition={{duration: 0.5}}
    //         className="dark:bg-slate-800 bg-slate-200 rounded-3xl w-full"
    //     >
    //         {showPromos && promoLookup.length > 0 && promotions
    //             .filter(promotion => promotion.is_active)
    //             .filter(promotion => promotion.name.toLowerCase().includes(promoLookup.toLowerCase()))
    //             .map( promotion => (
    //                 <div key={promotion.id} className="px-6 py-2 hover:bg-blue-700 rounded-3xl hover:text-slate-50 my-2">
    //                     <p
    //                         onClick={() => {
    //                             setPromoLookup(promotion.name)
    //                             setPromo(promotion.id)
    //                             setCost && setCost(promotion.amount)
    //                             setShowPromos(false)
    //                         }}
    //                     >{promotion.name}</p>
    //                 </div>
    //             ))
    //         }
    //     </motion.div>
    // </div>
    <div>
        {promotions.map( promotion => (
            <p key={promotion.id}>
                {promotion.name}
            </p>
        ))}
    </div>
  )
}

export default PromoLookup