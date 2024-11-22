
// name: string
// description: string
// cost: number
// picture: string
// category: number

import useCreateDish from "../../hooks/api/dish/useCreateDish"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"

const CreateDish = () => {

    const access = useAuthStore(s => s.access) || ''
    const createDish = useCreateDish()

    const handleCreate = () => {
        createDish.mutate({ dish: { name: 'new dsih', description: 'dfadfadsfasdf', cost: 10, picture: 'dfasdfa', category: 4 }, access })
    }

  return (
    <div>
        <Button 
            label="New Dish"
            onClick={handleCreate}
        />
    </div>
  )
}

export default CreateDish