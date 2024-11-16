import { useState } from "react"
import ItemCounter from "../cart/ItemCounter"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import Button from "../ui/Button"
import { UseMutationResult } from "@tanstack/react-query"
import { OrderItem } from "../../services/api/orderItemService"
import { CreateOrderItemData } from "../../hooks/api/orderItem/useCreateOrderItem"
import DishLookup from "../dish/DishLookup"

interface Props {
    createOrderItem:  UseMutationResult<OrderItem, Error, CreateOrderItemData>
}

const OrderItemForm = ({ createOrderItem }: Props) => {

    const [counter, setCounter] = useState(0)
    const [selectedDish, setSelectedDish] = useState(0)

    const handleCreateOrderItem = () => {
        createOrderItem
    }

  return (
    <form className="flex flex-col items-center justify-start my-6">
        <div className="w-full grid grid-cols-4 gap-4">
            <DishLookup 
                selectedDish={selectedDish}
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
            onClick={handleCreateOrderItem}
        />
    </form>
  )
}

export default OrderItemForm