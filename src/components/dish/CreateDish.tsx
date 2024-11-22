import { useState } from "react"
import useCreateDish from "../../hooks/api/dish/useCreateDish"
import DishForm from "./DishForm"
import Button from "../ui/Button"

const CreateDish = () => {

    const [open, setOpen] = useState(false)
    const createDish = useCreateDish()

  return (
    <>
        <Button 
            label="New Dish"
            onClick={() => setOpen(true)}
        />
        <DishForm 
            open={open}
            setOpen={setOpen}
            createDish={createDish}
        />
    </>
  )
}

export default CreateDish