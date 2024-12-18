import { generateTicketData } from "../../utils/billing"
import Button from "../ui/Button"
import { SimpleOrderItem } from "../../services/api/orderService"
import axios from "axios"

interface Props {
    orderItems:  SimpleOrderItem[]
    correlative: string
}

const Ticket = ({ orderItems, correlative }: Props) => {

    const ticket = generateTicketData({ correlative, orderItems })

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
        label='Get Ticket'
        onClick={handleSunat}
    />
  )
}

export default Ticket