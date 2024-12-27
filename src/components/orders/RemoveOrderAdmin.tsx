import { RiDeleteBin2Fill } from "@remixicon/react"
import Modal from "../ui/Modal"
import { useState } from "react"
import useAuthStore from "../../hooks/store/useAuthStore"
import useRemoveOrder from "../../hooks/api/order/useRemoveOrder"
import Button from "../ui/Button"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

interface Props {
    orderId: number
    setLoading:  React.Dispatch<React.SetStateAction<boolean>>
}

const RemoveOrderAdmin = ({ orderId, setLoading }: Props) => {

    const [open, setOpen] = useState(false)
    const access = useAuthStore(s => s.access) || ''
    const lan = useLanguageStore(s => s.lan)
    const { setShow, setType, setMessage} = useNotificationsStore()

    const removeOrder = useRemoveOrder({ orderId })

    const handleRemove = () => {

        setLoading(true)
        removeOrder.mutate({ access }, {
            onSuccess: () => {
                setShow(true)
                setType('success')
                setMessage( lan === 'EN' ? 'Order removed' : 'Orden eliminada')
            },
            onError: err => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${err}`)
            },
            onSettled: () => setLoading(false)
        })
    }

  return (
    <>
        <div className="flex items-center py-4">
            <RiDeleteBin2Fill 
                onClick={() => setOpen(true)}
                className="text-red-600 hover:text-red-500 cursor-pointer"/>
        </div>
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <div className="w-full flex flex-col items-center justify-start gap-12">
                <h2 className="font-bold text-xl">
                    {lan === 'EN' ? 'Are you sure you want to remove order' : 'Estas seguro que quieres remover la orden'} 
                    {orderId}
                </h2>
                <div className="w-full flex justify-center gap-20">
                    <Button label={lan === 'EN' ? "Yes" : 'Si'} color="red" onClick={handleRemove}/>
                    <Button label="No" color="blue" onClick={() => setOpen(false)}/>
                </div>
            </div>
        </Modal>
    </>
  )
}

export default RemoveOrderAdmin