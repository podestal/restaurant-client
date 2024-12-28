import { useState } from "react"
import useCreateCartItem from "../../hooks/api/cartItem/useCreateCartItem"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { Cart } from "../../services/api/cartService"
import { Dish } from "../../services/api/dishService"
import Button from "../ui/Button"
import CartItemForm from "./CartItemForm"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import { Promotion } from "../../services/api/promotionService"

interface Props {
    cart: Cart
    dish?: Dish
    promotion?: Promotion
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const CreateCartItem = ({ cart, dish, promotion, count, setCount }: Props) => {

    const createCartItem = useCreateCartItem(cart.id)
    const { setShow, setType, setMessage } = useNotificationsStore()
    const [ open, setOpen ] = useState(false)
    const lan = useLanguageStore(s => s.lan)

  return (
    <div>
        <Button 
            onClick={() => {
                if (count === 0) {
                    setShow(true)
                    setType('error')
                    setMessage('You forgot to setup the number')
                    return
                }
                setOpen(true)}
            }
            label={lan === 'EN' ? "Add" : 'Añadir'}
        />
        <CartItemForm 
            dish={dish}
            promotion={promotion}
            open={open}
            setOpen={setOpen}
            count={count}
            setCount={setCount}
            cartId={cart.id}
            createCartItem={createCartItem}
        />
    </div>
  )
}

export default CreateCartItem