import { useState } from "react"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import PromotionForm from "./PromotionForm"
import useCreatePromotion from "../../hooks/api/promotion/useCreatePromotion"

const CreatePromotion = () => {

    const [open, setOpen] = useState(false)
    const createPromotion = useCreatePromotion()

  return (
    <>
        <Button 
            label="New Promotion"
            onClick={() => setOpen(true)}
        />
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <PromotionForm 
                createPromotion={createPromotion}
            />
        </Modal>
    </>
  )
}

export default CreatePromotion