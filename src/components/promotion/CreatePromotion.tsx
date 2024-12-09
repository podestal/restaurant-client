import { useState } from "react"
import Button from "../ui/Button"
import useCreatePromotion from "../../hooks/api/promotion/useCreatePromotion"
import PromotionModal from "./PromotionModal"

const CreatePromotion = () => {

    const [open, setOpen] = useState(false)
    const createPromotion = useCreatePromotion()

  return (
    <>
        <Button 
            label="New Promotion"
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