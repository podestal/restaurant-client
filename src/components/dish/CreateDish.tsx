import { useState } from "react"
import useCreateDish from "../../hooks/api/dish/useCreateDish"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import DishForm from "./DishForm"

const CreateDish = () => {

    const [open, setOpen] = useState(false)
    const createDish = useCreateDish()

  return (
    <div>
        <Button 
            label="New Dish"
            onClick={() => setOpen(true)}
        />
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <DishForm 
                createDish={createDish}
            />
        </Modal>
    </div>
  )
}

export default CreateDish