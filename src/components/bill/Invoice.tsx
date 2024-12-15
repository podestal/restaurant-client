import { useState } from "react"
import { SimpleOrderItem } from "../../services/api/orderService"
import { generateInvoiceData } from "../../utils/billing"
import axios from "axios"
import Button from "../ui/Button"
import Input from "../ui/Input"

interface Props {
    orderItems: SimpleOrderItem[]
    setDoctype: React.Dispatch<React.SetStateAction<"T" | "I">>
    correlative: string
}

const Invoice = ({ orderItems, setDoctype, correlative }: Props) => {

    const [show, setShow] = useState(false)
    const [ruc, setRuc] = useState('')
    const [address, setAddress] = useState('')
    // const ruc = '20000000051'
    // const address = '272 Chestnut street'



    const handleSunat = (e:  React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        const invoice = generateInvoiceData({ correlative, orderItems, ruc, address })

        axios.post('https://back.apisunat.com/personas/v1/sendBill', invoice, {
            headers: {
              "Content-Type": "application/json",
            },
          })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

  return (
    <>
        {!show ?
        <Button 
            label='Invoice'
            onClick={() => {
                setDoctype('I')
                setShow(true)}}
        />
        :
        <form
            onSubmit={handleSunat}
            className="w-full flex flex-col items-center gap-6"
        >
            <h2 className="text-2xl">Invoice Info</h2>
            <div className="w-full flex justify-center items-center gap-6">
                <Input 
                    placeholder="RUC ..."
                    value={ruc}
                    onChange={e => {
                        setRuc(e.target.value)
                    }}
                />
                <Input 
                    placeholder="Address ..."
                    value={address}
                    onChange={e => {
                        setAddress(e.target.value)
                    }}
                />
            </div>
            <div className="flex justify-center items-center gap-6">
                <Button 
                    label="Go Back"
                    type="button"
                    onClick={() => {
                        setDoctype('T')
                        setShow(false)}}
                />
                <Button 
                    label="Create Invoce"
                    type="submit"
                />
            </div>
        </form>
        }
    </>
  )
}

export default Invoice