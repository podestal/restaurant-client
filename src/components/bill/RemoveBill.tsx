import { useState } from "react"
import useRemoveBill from "../../hooks/api/bill/useRemoveBill"
import useAuthStore from "../../hooks/store/useAuthStore"
import useLanguageStore from "../../hooks/store/useLanguageStore"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import Button from "../ui/Button"

interface Props {
    tableId: number
    billId: number
    allowRemoveBill: boolean
}


const RemoveBill = ({ tableId, billId, allowRemoveBill }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const removeBill = useRemoveBill({ tableId, billId })
    const { setShow, setType, setMessage } = useNotificationsStore()
    const lan = useLanguageStore(s => s.lan)
    const [loading, setLoading] = useState(false)
    
    const handleRemove = () => {
        console.log('removing bill');
        
        if (allowRemoveBill) {
            setShow(true)
            setType('error')
            setMessage('You still have orders in the kitchen')
            return
        }

        setLoading(true)

        removeBill.mutate({ access } , {
            onError: err => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${err}`)
            },
            onSettled: () => setLoading(false)
        })
    }

  return (
    <div>
        {loading 
        ? 
        <Button 
            label={lan === 'EN' ? 'Closing' : 'Cerrando'}
            color="red"
            disable={true}
        /> 
        :
        <Button 
            label={lan === 'EN' ? 'Close table' : 'Cerrar mesa'}
            color="red"
            onDoubleClick={handleRemove}
        />
        }
    </div>
  )
}

export default RemoveBill