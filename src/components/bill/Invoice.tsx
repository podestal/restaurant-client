import { useEffect, useState } from "react"
import { SimpleOrderItem } from "../../services/api/orderService"
import { generateInvoiceData, getCorrelative } from "../../utils/billing"
import axios from "axios"
import Button from "../ui/Button"

interface Props {
    orderItems:  SimpleOrderItem[]
}

const Invoice = ({ orderItems }: Props) => {

    const [correlative, setCorrelative] = useState('')
    const ruc = '20000000051'
    const address = '272 Chestnut street'

    const invoice = generateInvoiceData({ correlative, orderItems, ruc, address })

    useEffect(() => {
        getCorrelative({ setCorrelative, documentType: 'T' })
    }, [])

    const handleSunat = () => {
        axios.post('https://back.apisunat.com/personas/v1/sendBill', invoice, {
            headers: {
              "Content-Type": "application/json",
            },
          })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

  return (
    <Button 
        label='Invoice'
        onClick={handleSunat}
    />
  )
}

export default Invoice