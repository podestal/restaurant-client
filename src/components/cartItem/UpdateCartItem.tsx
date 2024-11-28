import { useState } from "react"
import ItemCounter from "../cart/ItemCounter"
import useUpdateCartItem from "../../hooks/api/cartItem/useUpdateCartItem"
import { Item } from "../../services/api/cartService"
import TextArea from "../ui/TextArea"
import Button from "../ui/Button"

interface Props {
    cartId: number
    cartItem: Item
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateCartItem = ({ cartId, cartItem, setUpdate }: Props) => {

    const [counter, setCounter] = useState(cartItem.quantity)
    const [observations, setObservations] = useState(cartItem.observations)
    const updateCartItem = useUpdateCartItem({ cartId, cartItemId: cartItem.id })

    const handleUpdate = () => {
        updateCartItem.mutate({
            updates: {...cartItem, dish:cartItem.dish_id, cart: cartId, observations, quantity: counter},
            access: ''
        }, {
            onSuccess: () => {
                setUpdate(false)
            }
        })
    }

  return (
    <div>
        <div className="w-full grid grid-cols-3 gap-12 my-6 place-items-center">
            <ItemCounter 
                counter={counter}
                setCounter={setCounter}
            />
            <p className="text-xl font-bold font-palanquin col-span-2">{cartItem.name}</p>
        </div>
        <TextArea 
            placeholder="Observations ..."
            value={observations}
            onChange={e => setObservations(e.target.value)}
        />
        <Button 
            label="Save"
            onClick={handleUpdate}
        />
    </div> 
  )
}

export default UpdateCartItem