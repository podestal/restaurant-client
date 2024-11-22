import { useState } from "react"
import useGetCategories from "../../hooks/api/category/useGetCategories"
import Modal from "../ui/Modal"
import Button from "../ui/Button"

const CategoreisAdmin = () => {

    const [open, setOpen] = useState(false)
    const { data: categories, isLoading, isError, error, isSuccess } = useGetCategories()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div>
        <Button 
            label="Categories"
            onClick={() => setOpen(true)}
        />
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            {categories?.map( category => (
                <div>
                    <p>{category.name}</p>
                </div>
            ))}
        </Modal>
    </div>
  )
}

export default CategoreisAdmin