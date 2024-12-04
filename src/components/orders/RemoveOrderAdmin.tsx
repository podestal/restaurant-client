import { RiDeleteBin2Fill } from "@remixicon/react"
import Modal from "../ui/Modal"
import { useState } from "react"
import useAuthStore from "../../hooks/store/useAuthStore"
import useRemoveOrder from "../../hooks/api/order/useRemoveOrder"
import Button from "../ui/Button"

interface Props {
    orderId: number
}

const RemoveOrderAdmin = ({ orderId }: Props) => {

    const [open, setOpen] = useState(false)
    const access = useAuthStore(s => s.access) || ''

    const removeOrder = useRemoveOrder({ orderId })

    const handleRemove = () => {
        removeOrder.mutate({ access })
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
                <h2 className="font-bold text-xl">Are you sure you want to remove order {orderId}</h2>
                <div className="w-full flex justify-center gap-20">
                    <Button label="Yes" color="red" onClick={handleRemove}/>
                    <Button label="No" color="blue" onClick={() => setOpen(false)}/>
                </div>
            </div>
        </Modal>
    </>
  )
}

export default RemoveOrderAdmin