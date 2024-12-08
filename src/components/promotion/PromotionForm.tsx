import { useState } from "react"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import Switch from "../ui/Switch"
import { UseMutationResult } from "@tanstack/react-query"
import { Promotion } from "../../services/api/promotionService"
import { CreatePromotionData } from "../../hooks/api/promotion/useCreatePromotion"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"

interface Props {
    createPromotion: UseMutationResult<Promotion, Error, CreatePromotionData>
}

const PromotionForm = ({ createPromotion }: Props) => {

    const access = useAuthStore(s => s.access) || ''

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [active, setActive] = useState(true)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createPromotion.mutate({ 
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
            onChange={e => setName(e.target.value)}
        />
        <TextArea 
            placeholder="Description ..."
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <Input 
            placeholder="Amount ..."
            value={amount}
            onChange={e => setAmount(e.target.value)}
        />
        <Switch 
            value={active}
            setter={setActive}
            label="Is Active"
        />
        <Button 
            label="Next"
        />
    </form>
  )
}

export default PromotionForm