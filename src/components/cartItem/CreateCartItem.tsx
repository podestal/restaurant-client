import { Cart } from "../../services/api/cartService"
import Button from "../ui/Button"

interface Props {
    cart: Cart
}

const CreateCartItem = ({ cart }: Props) => {

    // const createCartItem

    const handleCreateOrderItem = () => {
        console.log('cart',cart);
        
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