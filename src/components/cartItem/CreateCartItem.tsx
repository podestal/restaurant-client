import useCreateCartItem from "../../hooks/api/cartItem/useCreateCartItem"
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

    const handleCreateOrderItem = () => {
        console.log('dish from create', dish)
        console.log('cart',cart);
        createCartItem.mutate({ cartItem: {
            quantity: count,
            dish: dish.id,
            price: dish.cost,
            cart: cart.id
        } })
    }

  return (
    <div>
            {/* <>{console.log('dish from create', dish)}</> */}
            <Button 
                onClick={handleCreateOrderItem}
                label="Add"
            />
    </div>
  )
}

export default CreateCartItem