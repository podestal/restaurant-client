import { useState } from "react"
import ItemCounter from "../cart/ItemCounter"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import Button from "../ui/Button"

const OrderItemForm = () => {

    const [counter, setCounter] = useState(0)

  return (
    <form className="flex flex-col items-center justify-start my-6">
        <div className="w-full grid grid-cols-4 gap-4">
            <Input 
                placeholder="Dish ..."
                stylesContainer="col-span-3"
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