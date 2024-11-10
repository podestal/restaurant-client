import { Item } from "../../services/api/cartService"
import RemoveCardItem from "./RemoveCardItem"
import { motion } from "framer-motion"

interface Props {
    cartItem: Item
    cartId: number
}

const CartItemCard = ({ cartItem, cartId }: Props) => {



  return (
    <motion.div 
        layout
        className="grid grid-cols-6 gap-2 my-6">
        <p className="mt-1">{cartItem.quantity}</p>
        <div className="col-span-4 flex flex-col gap-6">
            <div>
                <p className="text-xl font-bold font-palanquin mb-4">{cartItem.name}</p>
                <p className="text-md">Observations</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Update</p>
                <RemoveCardItem 
                    cartItem={cartItem}
                    cartId={cartId}
                />
            </div>
        </div>
        <p className="text-right mt-1">{cartItem.price}</p>
    </motion.div>
  )
}

export default CartItemCard