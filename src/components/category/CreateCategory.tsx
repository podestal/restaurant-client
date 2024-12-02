import { useState } from "react"
import Input from "../ui/Input"
import Button from "../ui/Button"
import useAuthStore from "../../hooks/store/useAuthStore"
import useCreateCategory from "../../hooks/api/category/useCreateCategory"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

const CreateCategory = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const { setShow, setType, setMessage } = useNotificationsStore()

    const access = useAuthStore(s => s.access) || ''
    const createCategory = useCreateCategory()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setNameError('')

        if (!name) {
            setNameError('You forgot the new category name')
            return
        }

        createCategory.mutate(
            { category: { name, description: '' }, access }, 
            { onSuccess: () => {
                setName('')
                setShow(true)
                setType('success')
                setMessage('Category created')
            }, 
                onError: err => {
                    setShow(true)
                    setType('error')
                    setMessage(`Error: ${err.message}`)
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
                placeholder="New Category ..."
                value={name}
                onChange={e => {
                    name && setNameError('')
                    setName(e.target.value)}}
                error={nameError}
            />
        </div>
        <Button 
            label="Add"
        />
    </form>
  )
}

export default CreateCategory