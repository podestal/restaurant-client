import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Selector from "../ui/Selector"
import useCreateOrder from "../../hooks/api/order/useCreateOrder"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { useNavigate } from "react-router-dom"
import PickupAddress from "./PickupAddress"
import useAuthStore from "../../hooks/store/useAuthStore"
import { User } from "../../services/auth/signupService"

interface Props {
    cartId: number
    user?: User
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

const AnonymousUserForm = ({ cartId, user }: Props) => {

    const { setShow, setType, setMessage } = useNotificationsStore()
    const navigate = useNavigate()
    const access = useAuthStore(s => s.access) || ''

    const createOrder = useCreateOrder({ cart: cartId })

    const [name, setName] = useState(user ? `${user.first_name} ${user.last_name}` : '')
    const [phone, setPhone] = useState(user ? user.phone : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [orderType, setOrderType] = useState(1)
    const [address, setAddress] = useState('')

    const [nameError, setNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [emailError, setEmailError] = useState('')
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

        if (!email) {
            setEmail('We need your email')
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
                customer_email: email,
                customer_address: address,
        }, access }, {
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
            <Input 
                placeholder="Your name ..."
                value={name}
                onChange={e => {
                    name && setNameError('')
                    setName(e.target.value)
                }}
                error={nameError}
            />
            <div className="w-full flex justify-center items-center gap-6">
                <Input 
                    placeholder="Your email ..."
                    value={email}
                    onChange={e => {
                        email && setEmailError('')
                        setEmail(e.target.value)
                    }}
                    error={emailError}
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