import { useState } from "react"
import useCreateCartItem from "../../hooks/api/cartItem/useCreateCartItem"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { Cart } from "../../services/api/cartService"
import { Dish } from "../../services/api/dishService"
import Button from "../ui/Button"
import Modal from "../ui/Modal"

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

    const handleCreateOrderItem = () => {
        createCartItem.mutate({ cartItem: {
            quantity: count,
            dish: dish.id,
            price: dish.cost * count,
            cart: cart.id
        }}, {
            onSuccess: () => {
                setShow(true)
                setType('success')
                setMessage('Item added to cart')
                setCount(0)
            },
            onError: (error) => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${error.message}`)
            }
        })
    }

  return (
    <div>
        <Button 
            onClick={() => setOpen(true)}
            label="Add"
        />
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <p>My modal</p>
        </Modal>
    </div>
  )
}

export default CreateCartItem