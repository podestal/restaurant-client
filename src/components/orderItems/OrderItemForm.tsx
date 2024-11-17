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
}

const OrderItemForm = ({ createOrderItem }: Props) => {

    const access = useAuthStore(s => s.access)
    const [counter, setCounter] = useState(0)
    const [selectedDish, setSelectedDish] = useState(0)

    const handleCreateOrderItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createOrderItem.mutate({ 
            orderItem: { dish: selectedDish, quantity: counter, order: 1, cost: 10, observations: ''  }, 
            access 
        })
    }

  return (
    <form 
        onSubmit={handleCreateOrderItem}
        className="flex flex-col items-center justify-start my-6">
        <div className="w-full grid grid-cols-4 gap-4">
            <DishLookup 
                setSelectedDish={setSelectedDish}
            />
            <ItemCounter 
                counter={counter}
                setCounter={setCounter}
            />
        </div>
        <TextArea 
            placeholder="Observations ..."
        />
        <Button 
            label="Add Dish"
        />
    </form>
  )
}

export default OrderItemForm