import useCreateBill from "../../hooks/api/bill/useCreateBill"
import Button from "../ui/Button"
import useAuthStore from "../../hooks/store/useAuthStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { useState } from "react"

interface Props {
    tableId: number
    setEnableCreateOrder: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateBill = ({ tableId, setEnableCreateOrder }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const createBill = useCreateBill({ tableId })
    const lan = useLanguageStore(s => s.lan)
    const { setShow, setType, setMessage } = useNotificationsStore()
    const [loading, setLoading] = useState(false)

    const handleCreate = () => {
        setLoading(true)
        createBill.mutate({ bill: {}, access }, 
            {
                onSuccess: () => setEnableCreateOrder(true),
                onError: err => {
                    setShow(true)
                    setType('error')
                    setMessage(`Error: ${err}`)
                },
                onSettled: () => setLoading(false)
            
            })
    }

  return (
    <div className="w-full flex justify-center">
        {loading 
        ?
        <Button 
            label={lan === 'EN' ? 'Opening' : 'Inicando'}
            disable={true}
        />
        : 
        <Button 
            label={lan === 'EN' ? 'Open Table' : 'Abrir Mesa'}
            onClick={handleCreate}
        />
        }
    </div>
  )
}

export default CreateBill