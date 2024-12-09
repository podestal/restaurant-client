import { useState } from "react"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import Switch from "../ui/Switch"
import { UseMutationResult } from "@tanstack/react-query"
import { Promotion } from "../../services/api/promotionService"
import { CreatePromotionData } from "../../hooks/api/promotion/useCreatePromotion"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

interface Props {
    createPromotion?: UseMutationResult<Promotion, Error, CreatePromotionData>
    updatePromotion?: UseMutationResult<Promotion, Error, CreatePromotionData>
    promotion?: Promotion
    setPromotion:  React.Dispatch<React.SetStateAction<Promotion | null>>

}

const PromotionForm = ({ createPromotion, updatePromotion, promotion, setPromotion }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const { setShow, setType, setMessage } = useNotificationsStore()

    const [name, setName] = useState(promotion ? promotion.name : '')
    const [description, setDescription] = useState(promotion ? promotion.description : '')
    const [amount, setAmount] = useState(promotion ? '' : '')
    const [active, setActive] = useState(promotion ? promotion.is_active : true)

    const [nameError, setNameError] = useState('')
    const [amountError, setAmountError] = useState('')

    const buttonLabel = promotion ? 'Update' : 'Add Dishes' 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name) {
            setNameError('Name field is required')
            return
        }

        if (!amount) {
            setAmountError('Amount is required')
            return
        }

        createPromotion && createPromotion.mutate({ 
            promotion: {name, description, amount: parseFloat(amount), is_active: active }, 
            access 
        }, {
            onSuccess: res => {
                setPromotion(res)
            }, 
            onError: err => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${err.message}`)
            }
        })

        updatePromotion && updatePromotion.mutate({
            promotion: {name, description, amount: parseFloat(amount), is_active: active },
            access
        })
    }

  return (
    <form 
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mx-auto gap-6 w-[60%] my-6">
        <h2 className="text-2xl font-poppins font-bold">New Promotion</h2>
        <Input 
            placeholder="Name ..."
            value={name}
            onChange={e => {
                name && setNameError('')
                setName(e.target.value)}}
            error={nameError}
        />
        <TextArea 
            placeholder="Description ..."
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <Input 
            placeholder="Amount ..."
            value={amount}
            onChange={e => {
                amount && setAmountError('')
                setAmount(e.target.value)}}
            error={amountError}
        />
        <Switch 
            value={active}
            setter={setActive}
            label="Is Active"
        />
        <Button 
            label={buttonLabel}
        />
    </form>
  )
}

export default PromotionForm