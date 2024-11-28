import { useState } from "react"
import useCreateCartItem from "../../hooks/api/cartItem/useCreateCartItem"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { Cart } from "../../services/api/cartService"
import { Dish } from "../../services/api/dishService"
import Button from "../ui/Button"
import CartItemForm from "./CartItemForm"

interface Props {
    cart: Cart
    dish: Dish
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const CreateCartItem = ({ cart, dish, count, setCount }: Props) => {

    const createCartItem = useCreateCartItem(cart.id)
    const { setShow, setType, setMessage } = useNotificationsStore()
    const [ open, setOpen ] = useState(false)

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
            label="Add"
        />
        <CartItemForm 
            dish={dish}
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