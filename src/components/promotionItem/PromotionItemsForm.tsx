import { useState } from "react"
import DishLookup from "../dish/DishLookup"
import ItemCounter from "../cart/ItemCounter"
import useAuthStore from "../../hooks/store/useAuthStore"
import useCreatePromotionItem from "../../hooks/api/promotionItem/useCreatePromotionItem"
import Button from "../ui/Button"

interface Props {
    promotionId: number 
}

const PromotionItemsForm = ({ promotionId }: Props) => {

    const [dish, setDish] = useState(0)
    const [dishLookup, setDishLookup] = useState('')
    const [quantity, setQuantity] = useState(0)

    const [dishError, setDishError] = useState('')
    const [quantityError, setQuantityError] = useState('')

    const access = useAuthStore(s => s.access) || ''
    const createPromotionItem = useCreatePromotionItem({ promotionId })

    const handleCreate = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setQuantityError('')
        setDishError('')

        if (dish === 0) {
            setDishError('Dish is necessary')
            return
        }

        if (quantity === 0) {
            setQuantityError('Quantity must be greater that 0')
            return
        }

        createPromotionItem.mutate({ 
            promotion: { dish, quantity, promotion: promotionId }, access 
        }, {
            onSuccess: () => {
                setDish(0)
                setQuantity(0)
                setDishLookup('')
            }
        })
    }

  return (
    <form 
        className="w-full grid grid-cols-5 gap-4 my-6"
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
        <Button 
            label="add"
        />
    </form>
  )
}

export default PromotionItemsForm