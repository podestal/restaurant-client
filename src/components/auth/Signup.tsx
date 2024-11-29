import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import useSignup from "../../hooks/auth/useSignup"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { useNavigate } from "react-router-dom"
import useLogin from "../../hooks/auth/useLogin"

const Signup = () => {

    const { setShow, setType, setMessage } = useNotificationsStore()
    const navigate = useNavigate()

    const login = useLogin()

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [rePasswordError, setRePasswordError] = useState('')


    const [loading, setLoading] = useState(false)

    const signup = useSignup()

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!email) {
            setEmailError('Email is required')
            return
        }

        if (!firstName) {
            setFirstNameError('First name is required')
            return
        }

        if (!lastName) {
            setLastNameError('Last name is required')
            return
        }

        if (!phone) {
            setPhoneError('Phone is required')
            return
        }

        if (!password) {
            setPasswordError('Password is required')
            return
        }

        if (!rePassword) {
            setRePasswordError('Please type your password again')
            return
        }

        if (password !== rePassword) {
            setShow(true)
            setType('error')
            setMessage(`Passwords must match`)
            return
        }

        setLoading(true)

        signup.mutate({ user: {
            email,
            first_name: firstName,
            last_name: lastName,
            phone,
            password
        } }, {
            onSuccess: () => {
                login.mutate({
                    credentials: { email, password }
                }, {
                    onSuccess: () => {
                        setShow(true)
                        setType('success')
                        setMessage(`Account created, redirecting ...`)
                        setTimeout(() => {
                            navigate('/menu')
                        }, 2000)
                    }, onError: err => {
                        setShow(true)
                        setType('error')
                        setMessage(`Error: ${err.message}`)
                    }
                })
            }, 
            onError: err => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${err.message}`)
            },
            onSettled: () => setLoading(false)
        })


    }

  return (
    <div className="w-[20%] mx-auto">
        <h2 className="text-4xl font-bold font-palanquin text-center mb-12 mt-36">Register</h2>
        <form 
            onSubmit={handleSignup}
            className="w-full h-[60%] flex flex-col justify-start items-center gap-6">
            <Input 
                placeholder="Email"
                value={email}
                onChange={e => {
                    email && setEmailError('')
                    setEmail(e.target.value)}}
                error={emailError}
                type="email"
            />
            <Input 
                placeholder="First Name"
                value={firstName}
                onChange={e => {
                    firstName && setFirstNameError('')
                    setFirstName(e.target.value)}}
                error={firstNameError}
            />
            <Input 
                placeholder="Last Name"
                value={lastName}
                onChange={e => {
                    lastName && setLastNameError('')
                    setLastName(e.target.value)}}
                error={lastNameError}
            />
            <Input 
                placeholder="Phone"
                value={phone}
                onChange={e => {
                    phone && setPhoneError('')
                    setPhone(e.target.value)}}
                error={phoneError}
            />
            <Input 
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => {
                    password && setPasswordError('')
                    setPassword(e.target.value)}}
                error={passwordError}
            />
            <Input 
                placeholder="Re type password"
                type="password"
                value={rePassword}
                onChange={e => {
                    rePassword && setRePasswordError('')
                    setRePassword(e.target.value)}}
                error={rePasswordError}
            />
            <Button 
                label="Register"
                loading={loading}
            />
        </form>
    </div>
  )
}

export default Signup