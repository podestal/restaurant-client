import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Selector from "../ui/Selector"
import useCreateOrder from "../../hooks/api/order/useCreateOrder"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { useNavigate } from "react-router-dom"
import PickupAddress from "./PickupAddress"

interface Props {
    cartId: number
}

const orderTypes = [
    {
        id: 1,
        name: 'Take Out'
    },
    {   
        id: 2,
        name: 'Delivery',
    },
]

const AnonymousUserForm = ({ cartId }: Props) => {

    const { setShow, setType, setMessage } = useNotificationsStore()
    const navigate = useNavigate()

    const createOrder = useCreateOrder({ cart: cartId })

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [orderType, setOrderType] = useState(1)
    const [address, setAddress] = useState('')

    const [nameError, setNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [addressError, setAddressError] = useState('')

    const handleCreateOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name) {
            setNameError('We need your name')
            return
        }

        if (!phone) {
            setPhoneError('We need your phone number')
            return
        }

        if (orderType === 2  && !address) {
            setAddressError('We need your address')
            return
        }

        const order_type = orderType === 1 ? 'T' : 'D'

        createOrder.mutate({ 
            order: { 
                status: 'S', 
                order_type, 
                table: null,
                customer_name: name,
                customer_phone: phone,
                customer_address: address,
        }, access: '' }, {
            onSuccess: () => {
                setName('')
                setPhone('')
                setAddress('')
                setShow(true)
                setType('success')
                setMessage(`Order submmited`)
                setTimeout(() => {
                    navigate('/menu')
                }, 2000)
            }, 
            onError: error => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${error.message}`)
            }
        })
    }

  return (
    <div className="w-full flex flex-col justify-center items-center col-span-2">
        <PickupAddress 
        
        />
        <h2 className="text-2xl font-poppins font-bold mb-6">Your details</h2>
        <form 
            onSubmit={handleCreateOrder}
            className="w-[50%] flex flex-col justify-start items-center gap-6">
            <div className="w-full flex justify-center items-center gap-6">
                <Input 
                    placeholder="Your name ..."
                    value={name}
                    onChange={e => {
                        name && setNameError('')
                        setName(e.target.value)
                    }}
                    error={nameError}
                />
                <Input 
                    placeholder="Your Phone ..."
                    value={phone}
                    onChange={e => {
                        phone && setPhoneError('')
                        setPhone(e.target.value)}}
                    error={phoneError}
                />
            </div>
            <Selector 
                defaultValue={orderType}
                values={orderTypes}
                setter={setOrderType}
                label="Order Type"
            />
            {orderType === 2 && 
            <Input 
                placeholder="Address ..."
                value={address}
                onChange={e => {
                    address && setAddressError('')
                    setAddress(e.target.value)}}
                error={addressError}
            />}
            <Button 
                label="Place Order"
            />
        </form>
    </div>
  )
}

export default AnonymousUserForm