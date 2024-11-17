import { useState } from "react"
import ItemCounter from "../cart/ItemCounter"
import TextArea from "../ui/TextArea"
import Button from "../ui/Button"
import { UseMutationResult } from "@tanstack/react-query"
import { OrderItem } from "../../services/api/orderItemService"
import { CreateOrderItemData } from "../../hooks/api/orderItem/useCreateOrderItem"
import DishLookup from "../dish/DishLookup"
import useAuthStore from "../../hooks/store/useAuthStore"

interface Props {
    createOrderItem:  UseMutationResult<OrderItem, Error, CreateOrderItemData>
    orderId: number
}

export interface DishInfo {
    dishId: number
    dishCost: number
}

const OrderItemForm = ({ createOrderItem, orderId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const [counter, setCounter] = useState(0)
    const [dish, setDish] = useState(0)
    const [cost, setCost] = useState(0)
    const [observations, setObservations] = useState('')
    const [dishLookup, setDishLookup] = useState('')

    // Error Hsndler
    const [dishError, setDishError] = useState('')
    const [counterError, setCounterError] = useState('')

    const handleCreateOrderItem = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setDishError('')

        if (dishLookup.length === 0) {
            setDishError('This field is required')
            return
        }

        if (counter === 0) {
            setCounterError('You forgot the quantity')
            return
        }

        e.preventDefault()
        createOrderItem.mutate({ 
            orderItem: { dish, quantity: counter, order: orderId, cost, observations }, 
            access 
        }, {
            onSuccess: () => {
                setDish(0)
                setCost(0)
                setObservations('')
                setCounter(0)
                setDishLookup('')
            }
        })
    }

  return (
    <form 
        onSubmit={handleCreateOrderItem}
        className="flex flex-col items-center justify-start my-6">
        <div className="w-full grid grid-cols-4 gap-4">
            <DishLookup 
                setDish={setDish}
                setCost={setCost}
                dishLookup={dishLookup}
                setDishLookup={setDishLookup}
                dishError={dishError}
                setDishError={setDishError}
            />
            <ItemCounter 
                counter={counter}
                setCounter={setCounter}
                counterError={counterError}
                setCounterError={setCounterError}
            />
        </div>
        <TextArea 
            placeholder="Observations ..."
            value={observations}
            onChange={e => setObservations(e.target.value)}
        />
        <Button 
            label="Add Dish"
        />
    </form>
  )
}

export default OrderItemForm