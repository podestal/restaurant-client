import PromotionModal from "./PromotionModal"
import { Promotion } from "../../services/api/promotionService"

interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    promotion: Promotion
}

const UpdatePromotion = ({ open, setOpen, promotion }: Props) => {

  return (
    <PromotionModal 
        open={open}
        setOpen={setOpen}
        promotion={promotion}
        // updatePromotion={createPromotion}
    />
  )
}

export default UpdatePromotion