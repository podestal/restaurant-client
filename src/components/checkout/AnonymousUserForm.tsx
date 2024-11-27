import { useState } from "react"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import Input from "../ui/Input"
import Selector from "../ui/Selector"
import useCreateOrder from "../../hooks/api/order/useCreateOrder"

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

    const [open, setOpen] = useState(false)

    const createOrder = useCreateOrder({ cart: cartId })

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [orderType, setOrderType] = useState(1)
    const [address, setAddress] = useState('')

    const handleCreateOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const order_type = orderType === 1 ? 'T' : 'D'

        createOrder.mutate({ 
            order: { 
                status: 'S', 
                order_type, 
                table: null,
                customer_name: name,
                customer_phone: phone,
                customer_address: address,
        }, access: '' })
    }

  return (
    <>
        <Button 
            label="Checkout"
            onClick={() => setOpen(true)}
        />
        <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-2xl font-poppins font-bold mb-6">Your details</h2>
                <form 
                    onSubmit={handleCreateOrder}
                    className="w-[60%] flex flex-col justify-start items-center gap-6">
                    <Input 
                        placeholder="Your name ..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        placeholder="Your Phone ..."
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
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
                        onChange={e => setAddress(e.target.value)}
                    />}
                    <Button 
                        label="Place Order"
                    />
                </form>
            </div>
        </Modal>
    </>
  )
}

export default AnonymousUserForm