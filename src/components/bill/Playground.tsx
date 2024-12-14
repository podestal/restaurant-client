import axios from "axios"
import Button from "../ui/Button"
import { generateInvoiceData, generateTicketData, getCorrelative } from "../../utils/billing"
import { useEffect, useState } from "react"
import { SimpleOrderItem } from "../../services/api/orderService"

interface Props {
    orderItems:  SimpleOrderItem[]
}

const Playground = ({ orderItems }: Props) => {


    const [correlative, setCorrelative] = useState('')

    // const ticket = generateTicketData({ correlative, orderItems })

    const invoice = generateInvoiceData({ correlative, orderItems })

    useEffect(() => {
        getCorrelative({ setCorrelative, documentType: 'I' })
    }, [])


    const handleSunat = () => {

        
        axios.post('https://back.apisunat.com/personas/v1/sendBill', invoice, {
            headers: {
            //   Authorization: `JWT DEV_ARMXKt1dLYTkhbI6bhp1ErGVimApMLB8CayiMsvjDulEWYFK7lUpLIKN4kAdWHsX`,
              "Content-Type": "application/json",
            },
          })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }



  return (
    <div>
        <Button 
            label="send to sunat"
            onClick={handleSunat}
        />
    </div>
  )
}

export default Playground