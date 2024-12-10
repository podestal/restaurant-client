import PromotionModal from "./PromotionModal"
import { Promotion } from "../../services/api/promotionService"
import useUpdatePromotion from "../../hooks/api/promotion/useUpdatePromotion"

interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    promotion: Promotion
}

const UpdatePromotion = ({ open, setOpen, promotion }: Props) => {

  const updatePromotion = useUpdatePromotion({ promotionId: promotion.id })

  return (
    <PromotionModal 
        open={open}
        setOpen={setOpen}
        promotion={promotion}
        updatePromotion={updatePromotion}
    />
  )
}

export default UpdatePromotion