import { motion } from "framer-motion"
import { RiCloseCircleFill } from "@remixicon/react"
import { Cart } from "../../services/api/cartService"
import CartItems from "../cartItem/CartItems"

interface Props {
    isOpen: boolean
    onClose: () => void
    cart: Cart
}

const CartSlider = ({ isOpen, onClose, cart }: Props) => {
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
            className="fixed right-0 top-0 w-80 h-full dark:bg-slate-900 bg-white z-50 shadow-lg p-4"
        >
            <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 mb-4 text-right    "
            >
                <RiCloseCircleFill className="text-red-500" size={24} />
            </button>
            <CartItems 
                cartItems={cart.items}
            />
        </motion.div>
    </>
  )
}

export default CartSlider