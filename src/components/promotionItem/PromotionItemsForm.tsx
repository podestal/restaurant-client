import { useState } from "react"
import DishLookup from "../dish/DishLookup"
import ItemCounter from "../cart/ItemCounter"

interface Props {
    promotionId: number 
}

const PromotionItemsForm = ({ promotionId }: Props) => {

    const [dish, setDish] = useState(0)
    const [dishLookup, setDishLookup] = useState('')
    const [quantity, setQuantity] = useState(0)

    const [dishError, setDishError] = useState('')
    const [quantityError, setQuantityError] = useState('')

    const handleCreate = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <form 
        className="w-full grid grid-cols-4 gap-4"
        onSubmit={handleCreate}>
        <DishLookup 
            setDish={setDish}
            dishLookup={dishLookup}
            setDishLookup={setDishLookup}
            dishError={dishError}
            setDishError={setDishError}
        />
        <ItemCounter 
            counter={quantity}
            setCounter={setQuantity}
            counterError={quantityError}
            setCounterError={setQuantityError}
        />
    </form>
  )
}

export default PromotionItemsForm