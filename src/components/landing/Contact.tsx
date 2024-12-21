import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import TextArea from "../ui/TextArea"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import LaptopComponent from "./LaptopComponent"
import { motion } from "framer-motion"

const Contact = () => {

    const variants = {
        hidden: { opacity: 0, y: 50 }, 
        visible: { opacity: 1, y: 0 }, 
    };

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
    <motion.section 
        id="demo"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants}
        className="w-full grid grid-cols-3 mt-10 mb-[180px]">
        <form 
            onSubmit={handleSubmit}
            className="w-[80%] flex flex-col justify-start items-start gap-12 col-span-2">
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
        <div className="flex w-full justify-center items-center">
            <LaptopComponent />
        </div>
    </motion.section>
  )
}

export default Contact