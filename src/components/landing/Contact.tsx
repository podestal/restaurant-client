import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

const Contact = () => {

    const { setShow, setType, setMessage } = useNotificationsStore()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')

    const [disable, setDisable] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!name) {
            setNameError('Name is required')
            return
        }

        if (!email) {
            setEmailError('Email is required')
            return
        }

        setShow(true)
        setType('success')
        setMessage('Email sent')
        setDisable(true)
        setName('')
        setEmail('')

    }

  return (
    <div className="w-full grid grid-cols-3 my-10">
        <form 
            onSubmit={handleSubmit}
            className="w-full flex flex-col justify-start items-start gap-12">
            <h2 className="text-4xl font-palanquin font-bold">Request a Demo</h2>
            <Input 
                placeholder="Name ..."
                value={name}
                onChange={e => {
                    name && setNameError('')
                    setName(e.target.value)
                }}
                error={nameError}
            />
            <Input 
                placeholder="Email ..."
                value={email}
                onChange={e => {
                    email && setEmailError('')
                    setEmail(e.target.value)
                }}
                error={emailError}
            />
            <TextArea 
                placeholder="Comments"
                value={comments}
                onChange={e => setComments(e.target.value)}
            />
            <Button 
                label="Send"
                disable={disable}
            />
        </form>
        <div className="col-span-2 flex w-full justify-center items-center">
            <p>3d model</p>
        </div>
    </div>
  )
}

export default Contact