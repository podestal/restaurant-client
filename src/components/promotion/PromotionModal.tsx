import { useState } from "react"
import Modal from "../ui/Modal"
import { CreatePromotionData } from "../../hooks/api/promotion/useCreatePromotion"
import { Promotion } from "../../services/api/promotionService"
import { UseMutationResult } from "@tanstack/react-query"
import PromotionForm from "./PromotionForm"
import PromotionItems from "../promotionItem/PromotionItems"
import Button from "../ui/Button"

interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    promotion?: Promotion
    createPromotion?: UseMutationResult<Promotion, Error, CreatePromotionData>
    updatePromotion?: UseMutationResult<Promotion, Error, CreatePromotionData>
}

const PromotionModal = ({ open, setOpen, promotion, createPromotion }: Props) => {

    const [prom, setProm] = useState<Promotion | null>(promotion ? promotion :  null)
    const showForm = true

    const handleClose = () => {
        setProm(null)
        setOpen(false)
    }

  return (
    <Modal
        isOpen={open}
        onClose={handleClose}
    >
        <>
        {!prom
        ?
        <PromotionForm 
            createPromotion={createPromotion}
            setPromotion={setProm}
        />
        :
        <>
        <PromotionForm 
            createPromotion={createPromotion}
            setPromotion={setProm}
            promotion={prom}
        />
        <PromotionItems 
            promotionId={prom.id}
            showForm={showForm}
        />
        <div className="flex justify-center items-start mt-6">
            <Button 
                label="Save"
                onClick={handleClose}
            />
        </div>
        </>
        }
        </>
    </Modal>
  )
}

export default PromotionModal