import { useState } from "react"
import Button from "../ui/Button"
import useCreatePromotion from "../../hooks/api/promotion/useCreatePromotion"
import PromotionModal from "./PromotionModal"
import useLanguageStore from "../../hooks/store/useLanguageStore"

const CreatePromotion = () => {

    const [open, setOpen] = useState(false)
    const createPromotion = useCreatePromotion()
    const lan = useLanguageStore(s => s.lan)

  return (
    <>
        <Button 
            label={lan === 'EN' ? "New Promotion" : 'Nueva Promoción'}
            onClick={() => setOpen(true)}
        />
        <PromotionModal 
            open={open}
            setOpen={setOpen}
            createPromotion={createPromotion}
        />
    </>
  )
}

export default CreatePromotion