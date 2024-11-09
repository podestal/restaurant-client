import useCreateCartItem from "../../hooks/api/cartItem/useCreateCartItem"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { Cart } from "../../services/api/cartService"
import { Dish } from "../../services/api/dishService"
import Button from "../ui/Button"

interface Props {
    cart: Cart
    dish: Dish
    count: number
}

const CreateCartItem = ({ cart, dish, count }: Props) => {

    const createCartItem = useCreateCartItem(cart.id)
    const { setShow, setType, setMessage } = useNotificationsStore()

    const handleCreateOrderItem = () => {
        createCartItem.mutate({ cartItem: {
            quantity: count,
            dish: dish.id,
            price: dish.cost*count,
            cart: cart.id
        }}, {
            onSuccess: () => {
                setShow(true)
                setType('success')
                setMessage('Item added to cart')
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
            onClick={handleCreateOrderItem}
            label="Add"
        />
    </div>
  )
}

export default CreateCartItem