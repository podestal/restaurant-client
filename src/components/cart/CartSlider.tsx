import { motion } from "framer-motion"
import { RiCloseCircleFill } from "@remixicon/react"
import { Cart } from "../../services/api/cartService"
import CartItems from "../cartItem/CartItems"

interface Props {
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    cart: Cart
}

const CartSlider = ({ isOpen, setOpen, cart }: Props) => {

  return (
    <>
        {isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => {setOpen(false)}}
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
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-gray-900 mb-4 text-right    "
            >
                <RiCloseCircleFill className="text-red-500" size={24} />
            </button>
            <CartItems 
                cartItems={cart.items}
                cartId={cart.id}
                setOpen={setOpen}
            />
        </motion.div>

    </>
  )
}

export default CartSlider