import useCreateBill from "../../hooks/api/bill/useCreateBill"
import Button from "../ui/Button"
import useAuthStore from "../../hooks/store/useAuthStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"

interface Props {
    tableId: number
    setEnableCreateOrder: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateBill = ({ tableId, setEnableCreateOrder }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const createBill = useCreateBill({ tableId })
    const lan = useLanguageStore(s => s.lan)

    const handleCreate = () => {
        createBill.mutate({ bill: {}, access }, {onSuccess: () => setEnableCreateOrder(true)})
    }

  return (
    <div className="w-full flex justify-center">
        <Button 
            label={lan === 'EN' ? 'Open Table' : 'Abrir Mesa'}
            onClick={handleCreate}
        />
    </div>
  )
}

export default CreateBill