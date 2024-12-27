import { RiDeleteBin2Fill } from "@remixicon/react"
import { useState } from "react"
import Modal from "../ui/Modal"
import Button from "../ui/Button"
import useRemovePromotion from "../../hooks/api/promotion/useRemovePromotion"
import useAuthStore from "../../hooks/store/useAuthStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

interface Props {
    promotionId: number
}


const RemovePromotion = ({ promotionId }: Props) => {

    const [open, setOpen] = useState(false)
    const removePromotion = useRemovePromotion({ promotionId })
    const { setShow, setType, setMessage } = useNotificationsStore()
    const access = useAuthStore(s => s.access) || ''
    const lan = useLanguageStore(s => s.lan)
    const [loading, setLoading] = useState(false)

    const handleRemove = () => {
        setLoading(true)
        removePromotion.mutate({ access }, {
            onSettled: () => {
                setLoading(false)
            },
            onSuccess: () => {
                setShow(true)
                setType('success')
                setMessage(lan === 'EN' ? 'Promotion removed' : 'Promoción eliminada')
            },
            onError: error => {
                setShow(true)
                setType('error')
                setMessage(error.message)
            }
        })
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
                {loading 
                ? 
                <h2 className="text-3xl font-bold animate-pulse">{lan === 'EN' ? "Removing Promotion ..." : 'Eliminando Promoción'}</h2>
                : 
                <>
                <h2 className="text-3xl font-bold font-poppins">{lan === 'EN' ? 'Are you sure?' : 'Está seguro?'}</h2>
                <div className="w-full flex justify-evenly items-center">
                    <Button 
                        label={lan === 'EN' ? "Yes" : 'Si'}
                        color="red"
                        onClick={handleRemove}
                    />
                    <Button 
                        label="No"
                        onClick={() => setOpen(false)}
                    />
                </div>
                </>
                }
            </div>
        </Modal>
    </>
  )
}

export default RemovePromotion