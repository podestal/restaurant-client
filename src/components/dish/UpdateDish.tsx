import { Dish } from "../../services/api/dishService"
import DishForm from "./DishForm"

interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    dish: Dish
}

const UpdateDish = ({ open, setOpen, dish }: Props) => {

  return (
    <DishForm 
        open={open}
        setOpen={setOpen}
        dish={dish}
        // createDish={createDish}
    />
  )
}

export default UpdateDish