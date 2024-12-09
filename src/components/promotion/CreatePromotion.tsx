import { useState } from "react"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import PromotionForm from "./PromotionForm"
import useCreatePromotion from "../../hooks/api/promotion/useCreatePromotion"
import PromotionItems from "../promotionItem/PromotionItems"

const CreatePromotion = () => {

    const [open, setOpen] = useState(false)
    const createPromotion = useCreatePromotion()
    const [promotionId, setPromotionId] = useState(1)

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
        {promotionId === 0 ? 
        <PromotionForm 
            createPromotion={createPromotion}
            setPromotionId={setPromotionId}
        />
        :
        <PromotionItems 
            promotionId={promotionId}
        />}
        </Modal>
    </>
  )
}

export default CreatePromotion