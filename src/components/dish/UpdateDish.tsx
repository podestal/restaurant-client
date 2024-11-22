import useUpdateDish from "../../hooks/api/dish/useUpdateDish"
import { Dish } from "../../services/api/dishService"
import DishForm from "./DishForm"

interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    dish: Dish
}

const UpdateDish = ({ open, setOpen, dish }: Props) => {

    const updateDish = useUpdateDish({ dishId: dish.id })

  return (
    <>
        <DishForm 
            open={open}
            setOpen={setOpen}
            dish={dish}
            updateDish={updateDish}
        />
    </>
  )
}

export default UpdateDish