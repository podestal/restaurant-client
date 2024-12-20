import { generateTicketData } from "../../utils/billing"
import Button from "../ui/Button"
import { SimpleOrderItem } from "../../services/api/orderService"
import axios from "axios"
import { Bill } from "../../services/api/billService"
import { UseMutationResult } from "@tanstack/react-query"
import { UpdateBillData } from "../../hooks/api/bill/useUpdateBill"
import useAuthStore from "../../hooks/store/useAuthStore"

interface Props {
    orderItems:  SimpleOrderItem[]
    correlative: string
    updateBill: UseMutationResult<Bill, Error, UpdateBillData>
    disable: boolean
}

const Ticket = ({ orderItems, correlative, updateBill, disable }: Props) => {

    const ticket = generateTicketData({ correlative, orderItems })
    const access = useAuthStore(s => s.access) || ''

    const handleSunat = () => {
        axios.post('https://back.apisunat.com/personas/v1/sendBill', ticket, {
            headers: {
              "Content-Type": "application/json",
            },
          })
        .then(() => {
            updateBill.mutate({ updates: { document: 'T' }, access })
        })
        .catch(err => console.log(err))
    }

  return (
    <Button 
        label='Get Ticket'
        onClick={handleSunat}
        disable={disable}
    />
  )
}

export default Ticket