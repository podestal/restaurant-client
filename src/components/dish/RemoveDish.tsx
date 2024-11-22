import { RiDeleteBin2Fill } from "@remixicon/react"
import { useState } from "react"
import Modal from "../ui/Modal"
import Button from "../ui/Button"
import useAuthStore from "../../hooks/store/useAuthStore"
import useRemoveDish from "../../hooks/api/dish/useRemoveDish"

interface Props {
    dishId: number
}

const RemoveDish = ({ dishId }: Props) => {

    const [open, setOpen] = useState(false)
    const access = useAuthStore(s => s.access) || ''
    const removeDish = useRemoveDish({ dishId })

    const handleRemove = () => {
        removeDish.mutate({ access })
    }

  return (
    <>
        <RiDeleteBin2Fill 
            onClick={() => setOpen(true)}
            className="text-red-600 hover:text-red-800 cursor-pointer"/>
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
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

export default RemoveDish