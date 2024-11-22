import { RiDeleteBin2Fill } from "@remixicon/react"
import { Category } from "../../services/api/categoryService"
import { useState } from "react"
import Modal from "../ui/Modal"
import Button from "../ui/Button"
import useAuthStore from "../../hooks/store/useAuthStore"
import useRemoveCategory from "../../hooks/api/category/useRemoveCategory"

interface Props {
    category: Category
}

const RemoveCategory = ({ category }: Props) => {

    const [open, setOpen] = useState(false)
    const access = useAuthStore(s => s.access) || ''
    const removeCategory = useRemoveCategory({ categoryId: category.id })

    const handleRemove = () => {
        removeCategory.mutate({ access })
    }

  return (
    <>
        <RiDeleteBin2Fill 
            className="text-red-600 hover:text-red-700 cursor-pointer"
            onClick={() => setOpen(true)}
        />
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

export default RemoveCategory