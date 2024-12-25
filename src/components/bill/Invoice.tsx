import { useState } from "react"
import { SimpleOrderItem } from "../../services/api/orderService"
import { generateInvoiceData } from "../../utils/billing"
import axios from "axios"
import Button from "../ui/Button"
import Input from "../ui/Input"
import { UseMutationResult } from "@tanstack/react-query"
import { Bill } from "../../services/api/billService"
import { UpdateBillData } from "../../hooks/api/bill/useUpdateBill"
import useAuthStore from "../../hooks/store/useAuthStore"

interface Props {
    orderItems: SimpleOrderItem[]
    setDoctype: React.Dispatch<React.SetStateAction<"T" | "I">>
    correlative: string
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    setDisable: React.Dispatch<React.SetStateAction<boolean>>
    setSuccessMsg: React.Dispatch<React.SetStateAction<string>>
    updateBill: UseMutationResult<Bill, Error, UpdateBillData>
    lan: string
}

const Invoice = ({ orderItems, setDoctype, correlative, setShow, setDisable, setSuccessMsg, updateBill, lan }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const [ruc, setRuc] = useState('')
    const [address, setAddress] = useState('')

    const [rucError, setRucError] = useState('')
    // const ruc = '20000000051'
    // const address = '272 Chestnut street'



    const handleSunat = (e:  React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (ruc.length !== 11) {
            setRucError(lan === 'EN' ? 'RUC is 11 digits' : 'El RUC debe tener 11 dígitos')
            return
        }

        const rucType = ruc.slice(0, 2)

        if (!['20', '10'].includes(rucType) ) {
            setRucError(lan === 'EN' ? 'Invalid RUC' : 'RUC inválido')
            return
        }

        const invoice = generateInvoiceData({ correlative, orderItems, ruc, address })

        axios.post('https://back.apisunat.com/personas/v1/sendBill', invoice, {
            headers: {
              "Content-Type": "application/json",
            },
          })
        .then(() => {
            setRuc('')
            setAddress('')
            setShow(false)
            setSuccessMsg(lan === 'EN' ? 'Connecting to SUNAT' : 'Conectando a SUNAT')
            setTimeout(() => {
              setSuccessMsg(lan === 'EN' ? 'Invoice created' : 'Factura creada')
            }, 2000)
            updateBill.mutate(
                { updates: {document: 'I'}, access },
                { onSuccess: () => {
                    setDisable(true)
                    setTimeout(() => {
                      setSuccessMsg(lan === 'EN' ? 'Printing Invoice' : 'Imprimiendo Factura')
                    }, 4000)
                    setTimeout(() => {
                      setSuccessMsg('')
                    }, 7000)
                }}
            )
        })
        .catch(err => console.log(err))
    }

  return (
    // <>
    //     {!show ?
    //     <Button 
    //         label='Get Invoice'
    //         disable={disable}
    //         onClick={() => {
    //             setDoctype('I')
    //             setShow(true)}}
    //     />
    //     :
    //     <form
    //         onSubmit={handleSunat}
    //         className="w-full flex flex-col items-center gap-6"
    //     >
    //         <h2 className="text-2xl">Invoice Info</h2>
    //         <div className="w-full flex justify-center items-start gap-6">
    //             <Input 
    //                 placeholder="RUC ..."
    //                 value={ruc}
    //                 onChange={e => {
    //                     setRuc(e.target.value)
    //                     setRucError('')
    //                 }}
    //                 error={rucError}
    //             />
    //             <Input 
    //                 placeholder="Address ..."
    //                 value={address}
    //                 onChange={e => {
    //                     setAddress(e.target.value)
    //                 }}
    //             />
    //         </div>
    //         <div className="flex justify-center items-center gap-6">
    //             <Button 
    //                 label="Go Back"
    //                 type="button"
    //                 onClick={() => {
    //                     setDoctype('T')
    //                     setShow(false)
    //                     setRucError('')
    //                 }}
    //             />
    //             <Button 
    //                 label="Create Invoice"
    //                 type="submit"
    //             />
    //         </div>
    //     </form>
    //     }
    // </>
    <form
        onSubmit={handleSunat}
        className="w-full flex flex-col items-center gap-6"
    >
        <h2 className="text-2xl">{lan === 'EN' ? 'Invoice Info' : 'Información de Factura'}</h2>
        <div className="w-full flex justify-center items-start gap-6">
            <Input 
                placeholder="RUC ..."
                value={ruc}
                onChange={e => {
                    setRuc(e.target.value)
                    setRucError('')
                }}
                error={rucError}
            />
            <Input 
                placeholder={lan === 'EN' ? "Address ..." : 'Dirección ...'}
                value={address}
                onChange={e => {
                    setAddress(e.target.value)
                }}
            />
        </div>
        <div className="flex justify-center items-center gap-6">
            <Button 
                label={lan === 'EN' ? "Go Back" : 'Volver'}
                type="button"
                onClick={() => {
                    setDoctype('T')
                    setShow(false)
                    setRucError('')
                }}
            />
            <Button 
                label={lan === 'EN' ? "Create Invoice" : 'Crear Factura'}
                type="submit"
            />
        </div>
    </form>
  )
}

export default Invoice