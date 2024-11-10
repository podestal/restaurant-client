import { useState } from "react"
import useCreateCartItem from "../../hooks/api/cartItem/useCreateCartItem"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { Cart } from "../../services/api/cartService"
import { Dish } from "../../services/api/dishService"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import TextArea from "../ui/TextArea"

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
    const [observations, setObservations] = useState('')

    const handleCreateOrderItem = () => {

        createCartItem.mutate({ cartItem: {
            quantity: count,
            dish: dish.id,
            price: dish.cost * count,
            cart: cart.id,
            observations,
        }}, {
            onSuccess: () => {
                setShow(true)
                setType('success')
                setMessage('Item added to cart')
                setCount(0)
                setOpen(false)
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
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <div className="flex flex-col justify-start items-center mx-auto gap-12 w-[75%]">
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
    </div>
  )
}

export default CreateCartItem