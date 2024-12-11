import { RiDeleteBin2Fill } from "@remixicon/react"
import { useState } from "react"
import Modal from "../ui/Modal"
import Button from "../ui/Button"
import useRemovePromotion from "../../hooks/api/promotion/useRemovePromotion"
import useAuthStore from "../../hooks/store/useAuthStore"

interface Props {
    promotionId: number
}


const RemovePromotion = ({ promotionId }: Props) => {

    const [open, setOpen] = useState(false)
    const removePromotion = useRemovePromotion({ promotionId })
    const access = useAuthStore(s => s.access) || ''

    const handleRemove = () => {
        removePromotion.mutate({ access })
    }

  return (
    <>
        <RiDeleteBin2Fill 
            className="text-red-700 hover:text-red-600 cursor-pointer"
            onClick={() => setOpen(true)}
        />
        <Modal
            onClose={() => setOpen(false)}
            isOpen={open}
        >
            <div className="w-full flex flex-col justify-start items-center gap-10">
                <h2 className="text-3xl font-bold font-poppins">Are you sure?</h2>
                <div className="w-full flex justify-evenly items-center">
                    <Button 
                        label="Yes"
                        color="red"
                        onClick={handleRemove}
                    />
                    <Button 
                        label="No"
                        onClick={() => setOpen(false)}
                    />
                </div>
            </div>
        </Modal>
    </>
  )
}

export default RemovePromotion