import { RiDeleteBin2Fill } from "@remixicon/react"
import { Category } from "../../services/api/categoryService"
import { useState } from "react"
import Modal from "../ui/Modal"
import Button from "../ui/Button"
import useAuthStore from "../../hooks/store/useAuthStore"
import useRemoveCategory from "../../hooks/api/category/useRemoveCategory"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"

interface Props {
    category: Category
}

const RemoveCategory = ({ category }: Props) => {

    const [open, setOpen] = useState(false)
    const access = useAuthStore(s => s.access) || ''
    const removeCategory = useRemoveCategory({ categoryId: category.id })
    const { setShow, setType, setMessage } = useNotificationsStore()
    const lan = useLanguageStore(s => s.lan)
    const linkedCategoryErrorMssg = lan === 'EN' ? 'This Category have some dishes linked to it' : 'Esta categoría tiene platos vinculados a ella'
    const [loading, setLoading] = useState(false)


    const handleRemove = () => {
        setLoading(true)
        removeCategory.mutate({ access }, {
            onSuccess: () => {
                setShow(true)
                setType('success')
                setMessage(lan === 'EN' ? 'Category removed' : 'Categoría eliminada')
            },
            onError: (err) => {
                setShow(true)
                setType('error')
                const errorMsg = err.response?.status === 500 ? linkedCategoryErrorMssg : `Error: ${err.message}`
                setMessage(errorMsg)
            },
            onSettled: () => {
                setLoading(false)
            }
        })
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
                {loading 
                ? 
                <h2 className="text-3xl font-bold animate-pulse">{lan === 'EN' ? "Removing Category ..." : 'Eliminando Categoría'}</h2>
                : 
                <>
                <h2 className="text-3xl font-bold font-poppins">{lan === 'EN' ? 'Are you sure?' : 'Estás seguro?'}</h2>
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

export default RemoveCategory