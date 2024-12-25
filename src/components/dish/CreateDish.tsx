import { useState } from "react"
import useCreateDish from "../../hooks/api/dish/useCreateDish"
import DishForm from "./DishForm"
import Button from "../ui/Button"
import useLanguageStore from "../../hooks/store/useLanguageStore"

const CreateDish = () => {

    const [open, setOpen] = useState(false)
    const createDish = useCreateDish()
    const lan = useLanguageStore(s => s.lan)

  return (
    <>
        <Button 
            label={lan === 'EN' ? "New Dish" : 'Nuevo Plato'}
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