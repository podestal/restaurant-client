import { useState } from "react"
import Input from "../ui/Input"
import Button from "../ui/Button"
import useAuthStore from "../../hooks/store/useAuthStore"
import useCreateCategory from "../../hooks/api/category/useCreateCategory"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"

const CreateCategory = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [loading, setLoading] = useState(false)

    const { setShow, setType, setMessage } = useNotificationsStore()

    const access = useAuthStore(s => s.access) || ''
    const createCategory = useCreateCategory()
    const lan = useLanguageStore(s => s.lan)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setNameError('')

        if (!name) {
            setNameError(lan === 'EN' ? 'You forgot the new category name' : 'Olvidaste el nombre de la nueva categoría')
            return
        }

        setLoading(true)

        createCategory.mutate(
            { category: { name, description: '' }, access }, 
            { 
                onSuccess: () => {
                    setName('')
                    setShow(true)
                    setType('success')
                    setMessage(lan === 'EN' ? 'Category created' : 'Categoría creada')
                }, 
                onError: err => {
                    setShow(true)
                    setType('error')
                    setMessage(`Error: ${err.message}`)
                },
                onSettled: () => {
                    setLoading(false)
                }
            }
        )
    }

  return (
    <form 
        onSubmit={handleSubmit}
        className="w-full flex justify-center items-start gap-12 mt-10">
        <div className="w-[30%]">
            <Input 
                placeholder={lan === 'EN' ? "New Category ..." : 'Nueva Categoría ...'}
                value={name}
                onChange={e => {
                    name && setNameError('')
                    setName(e.target.value)}}
                error={nameError}
                disabled={loading}
            />
        </div>
        <Button 
            label={`${loading ? `${lan === 'EN' ? "Adding" : 'Añadiendo'}` : `${lan === 'EN' ? "Add" : 'Añadir'}`}`}
        />
    </form>
  )
}

export default CreateCategory