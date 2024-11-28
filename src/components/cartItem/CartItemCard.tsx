import { useState } from "react"
import { Item } from "../../services/api/cartService"
import RemoveCardItem from "./RemoveCardItem"
import { motion } from "framer-motion"
import ItemCounter from "../cart/ItemCounter"
import Button from "../ui/Button"
import TextArea from "../ui/TextArea"
import useUpdateCartItem from "../../hooks/api/cartItem/useUpdateCartItem"

interface Props {
    cartItem: Item
    cartId: number
}

const CartItemCard = ({ cartItem, cartId }: Props) => {

    const [update, setUpdate] = useState(false)
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
    <>
        {update 
        ? 
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
        : 
        <motion.div 
            layout
            className="grid grid-cols-6 gap-2 my-6">
            <p className="mt-1">{cartItem.quantity}</p>
            <div className="col-span-4 flex flex-col gap-6">
                <div>
                    <p className="text-xl font-bold font-palanquin mb-4">{cartItem.name}</p>
                    <p className="text-md">{cartItem.observations ? cartItem.observations : '-'}</p>
                </div>
                <div className="flex justify-between items-center">
                    <Button 
                        label="Update"
                        onClick={() => setUpdate(true)}
                    />
                    <RemoveCardItem 
                        cartItem={cartItem}
                        cartId={cartId}
                    />
                </div>
            </div>
            <p className="text-right mt-1">{cartItem.price}</p>
        </motion.div>
        }
    </>
  )
}

export default CartItemCard