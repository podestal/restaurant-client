import { useEffect, useState } from "react"
import { generateTicketData, getCorrelative } from "../../utils/billing"
import Button from "../ui/Button"
import { SimpleOrderItem } from "../../services/api/orderService"
import axios from "axios"

interface Props {
    orderItems:  SimpleOrderItem[]
}

const Ticket = ({ orderItems }: Props) => {

    const [correlative, setCorrelative] = useState('')
    const ticket = generateTicketData({ correlative, orderItems })

    useEffect(() => {
        getCorrelative({ setCorrelative, documentType: 'T' })
    }, [])

    const handleSunat = () => {
        axios.post('https://back.apisunat.com/personas/v1/sendBill', ticket, {
            headers: {
              "Content-Type": "application/json",
            },
          })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

  return (
    <Button 
        label='Ticket'
        onClick={handleSunat}
    />
  )
}

export default Ticket