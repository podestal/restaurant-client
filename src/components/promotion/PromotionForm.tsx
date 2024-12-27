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
import { UpdatePromotionData } from "../../hooks/api/promotion/useUpdatePromotion"
import useLanguageStore from "../../hooks/store/useLanguageStore"

interface Props {
    createPromotion?: UseMutationResult<Promotion, Error, CreatePromotionData>
    updatePromotion?: UseMutationResult<Promotion, Error, UpdatePromotionData>
    promotion?: Promotion
    setPromotion:  React.Dispatch<React.SetStateAction<Promotion | null>>

}

const PromotionForm = ({ createPromotion, updatePromotion, promotion, setPromotion }: Props) => {

    const lan = useLanguageStore(s => s.lan)
    const access = useAuthStore(s => s.access) || ''
    const { setShow, setType, setMessage } = useNotificationsStore()
    const positiveNumberRegex = /^[0-9]*\.?[0-9]+$/

    const [name, setName] = useState(promotion ? promotion.name : '')
    const [description, setDescription] = useState(promotion ? promotion.description : '')
    const [amount, setAmount] = useState(promotion ? promotion.amount : '')
    const [active, setActive] = useState(promotion ? promotion.is_active : true)

    const [nameError, setNameError] = useState('')
    const [amountError, setAmountError] = useState('')

    const [loading, setLoading] = useState(false)

    const buttonLabel = promotion ? `${lan === 'EN' ? 'Update' : 'Actualizar'}` : `${lan === 'EN' ? 'Add Dishes' : 'Agregar Platos'}`
    const loaderButtonLabel = promotion ? `${lan === 'EN' ? 'Updating' : 'Actualizando'}` : `${lan === 'EN' ? 'Creating' : 'Creando'}`

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name) {
            setNameError(lan === 'EN' ? 'Name field is required' : 'El campo nombre es requerido')
            return
        }

        if (!amount) {
            setAmountError(lan === 'EN' ? 'Amount is required' : 'El campo cantidad es requerido')
            return
        }

        setLoading(true)

        createPromotion && createPromotion.mutate({ 
            promotion: {name, description, amount, is_active: active }, 
            access 
        }, {
            onSuccess: res => {
                setPromotion(res)
            }, 
            onError: err => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${err.message}`)
            },
            onSettled: () => {
                setLoading(false)
            }
        })

        updatePromotion && updatePromotion.mutate({
            updates: { name, description, amount, is_active: active },
            access
        }, {
            onSuccess: () => {
                setShow(true)
                setType('success')
                setMessage(lan === 'EN' ? 'Promotion updated' : 'Promoción actualizada')
            },
            onError: err => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${err.message}`)
            },
            onSettled: () => {
                setLoading(false)
            }
        })
    }

  return (
    <form 
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mx-auto gap-6 w-[60%] my-6">
        <h2 className="text-2xl font-poppins font-bold">{lan === 'EN' ? 'New Promotion' : 'Nueva Promoción'}</h2>
        <Input 
            placeholder={lan === 'EN' ? "Name ..." : 'Nombre ...'}
            value={name}
            onChange={e => {
                name && setNameError('')
                setName(e.target.value)}}
            error={nameError}
        />
        <TextArea 
            placeholder={lan === 'EN' ? "Description ..." : 'Descripción ...'}
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <Input 
            placeholder={lan === 'EN' ? "Amount ..." : 'Costo ...'}
            value={amount}
            onChange={e => {
                const value = e.target.value

                if (value === '') {
                    setAmountError('')
                    setAmount(value)
                }
                else if (positiveNumberRegex.test(value)) {
                    amount && setAmountError('')
                    setAmount(value)
                } else {
                    setAmountError(lan === 'EN' ? 'Please enter a valid positive number' : 'Por favor ingrese un número positivo válido')
                }
            }}
            error={amountError}
        />
        <Switch 
            value={active}
            setter={setActive}
            label={lan === 'EN' ? "Is Active" : 'Activo'}
        />
        {!loading ? 
        <Button 
            label={buttonLabel}
        />
        :
        <Button 
            label={loaderButtonLabel}
            disable={true}
        />
        }
    </form>
  )
}

export default PromotionForm