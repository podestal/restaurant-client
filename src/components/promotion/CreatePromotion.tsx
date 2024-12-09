import { useState } from "react"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import PromotionForm from "./PromotionForm"
import useCreatePromotion from "../../hooks/api/promotion/useCreatePromotion"
import PromotionItems from "../promotionItem/PromotionItems"
import { Promotion } from "../../services/api/promotionService"
import PromotionInfo from "./PromotionInfo"

const CreatePromotion = () => {

    const [open, setOpen] = useState(false)
    const createPromotion = useCreatePromotion()
    const [promotion, setPromotion] = useState<Promotion | null>(null)
    const showForm = true

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

        {!promotion 
        ?
        <PromotionForm 
            createPromotion={createPromotion}
            setPromotion={setPromotion}
        />
        :
        <>
        <PromotionInfo 
            promotion={promotion}
        />
        <PromotionItems 
            promotionId={promotion.id}
            showForm={showForm}
        />
        </>
        }
        </Modal>
    </>
  )
}

export default CreatePromotion