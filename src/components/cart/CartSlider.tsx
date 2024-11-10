import { motion } from "framer-motion"
import { RiCloseCircleFill } from "@remixicon/react"
import { Cart } from "../../services/api/cartService"
import CartItems from "../cartItem/CartItems"
import Button from "../ui/Button"

interface Props {
    isOpen: boolean
    onClose: () => void
    cart: Cart
}

const CartSlider = ({ isOpen, onClose, cart }: Props) => {

    const totalCost = cart.items.reduce((accumulator, item) => {
        const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
        return accumulator += itemPrice
    }, 0)

  return (
    <>
        {isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={onClose}
            ></div>
        )}
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? "0%" : "100%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed right-0 top-0 w-96 h-full dark:bg-slate-950 bg-white z-50 p-4 overflow-x-hidden overflow-y-scroll shadow-xl shadow-slate-400 dark:shadow-slate-700"
        >
            <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 mb-4 text-right    "
            >
                <RiCloseCircleFill className="text-red-500" size={24} />
            </button>
            <CartItems 
                cartItems={cart.items}
                cartId={cart.id}
            />
            <div className="border-t-2 flex justify-between items-center pt-10">
                <h2 className="text-2xl">Total:</h2>
                <p className="text-2xl">{totalCost.toFixed(2)}</p>
            </div>
            <div className="flex justify-end mt-12">
                <Button 
                    label="Checkout"
                />
            </div>
        </motion.div>
    </>
  )
}

export default CartSlider