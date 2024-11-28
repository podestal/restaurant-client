import { useState } from "react"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import TextArea from "../ui/TextArea"
import { UseMutationResult } from "@tanstack/react-query"
import { CartItem } from "../../services/api/cartItemService"
import { CreateCartItemData } from "../../hooks/api/cartItem/useCreateCartItem"
import { Dish } from "../../services/api/dishService"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import ItemCounter from "../cart/ItemCounter"

    // id: number
    // quantity: number
    // dish: number
    // price: number
    // cart: number
    // observations: string

interface Props {
    dish?: Dish
    open: boolean
    cartId: number
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    createCartItem?: UseMutationResult<CartItem, Error, CreateCartItemData>
    count?: number
    setCount?: React.Dispatch<React.SetStateAction<number>>
    cartItem?: CartItem
}

const CartItemForm = ({ dish, open, cartId, setOpen, createCartItem, count, setCount, cartItem }: Props) => {

    const [observations, setObservations] = useState('')
    const { setShow, setType, setMessage } = useNotificationsStore()
    const [counter, setCounter] = useState(0)

    const handleCreateOrderItem = () => {

        if (dish) {
            const quantity = count ? count : 0
            const price = dish.cost * quantity
    
            createCartItem && createCartItem.mutate({ cartItem: {
                quantity,
                dish: dish.id,
                price,
                cart: cartId,
                observations,
            }}, {
                onSuccess: () => {
                    setShow(true)
                    setType('success')
                    setMessage('Item added to cart')
                    setCount && setCount(0)
                    setCounter(0)
                    setOpen(false)
                },
                onError: (error) => {
                    setShow(true)
                    setType('error')
                    setMessage(`Error: ${error.message}`)
                }
            })
        }
    }

  return (
    <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
    >
        <div className="flex flex-col justify-start items-center mx-auto gap-12 w-[75%]">
            {cartItem && 
            <ItemCounter 
                counter={counter}
                setCounter={setCounter}
            />
            }
            <h2 className="text-2xl font-palanquin">Any obervation to add ...</h2>
            <TextArea 
                placeholder="Observations ..."
                value={observations}
                onChange={ e => setObservations(e.target.value)}
            />
            <Button 
                onClick={handleCreateOrderItem}
                label="Add to cart"
            />
        </div>
    </Modal>
  )
}

export default CartItemForm