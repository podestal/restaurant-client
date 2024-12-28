import { motion } from 'framer-motion'
import { Promotion } from '../../services/api/promotionService'
import { useState } from 'react'
import ItemCounter from '../cart/ItemCounter'
import CreateCartItem from '../cartItem/CreateCartItem'
import { Cart } from '../../services/api/cartService'

interface Props {
    promotion: Promotion
    cart: Cart
}

const PromotionStoreCard = ({ promotion, cart }: Props) => {

    const [count, setCount] = useState(0)

  return (
    <motion.div 
        className="flex flex-col max-md:mx-6 justify-start border-2 border-slate-200 dark:border-slate-900 px-4 rounded-2xl shadow-xl shadow-slate-700 dark:shadow-slate-700">
        <div className="relative mb-4">
            <div className="w-full h-[50px]" />
        </div>

        <div className="flex justify-between items-start mb-4 md:h-[80px] gap-6">
            <h2 className="text-3xl font-semibold font-palanquin">{promotion.name}</h2>
            <div>
                <p className="font-bold mt-2">$.{promotion.amount}</p>
            </div>
        </div>
        <p className="text-xs dark:text-slate-400 text-slate-700">{promotion.description}</p>
        <div className="w-full flex justify-between items-center mx-auto max-lg:my-10 lg:py-6">
            <CreateCartItem 
                cart={cart}
                promotion={promotion}
                count={count}
                setCount={setCount}
            />
            <ItemCounter 
                counter={count}
                setCounter={setCount}
            />
        </div>
    </motion.div>
  )
}

export default PromotionStoreCard