import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import useSignup from "../../hooks/auth/useSignup"

const Signup = () => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [loading, setLoading] = useState(false)

    const signup = useSignup()

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        signup.mutate({ user: {
            email,
            first_name: firstName,
            last_name: lastName,
            phone,
            password
        } }, {
            onSuccess: () => {
                // setLoading(true)
            }, onSettled: () => setLoading(false)
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
                onChange={e => setEmail(e.target.value)}
                // error={usernameError}
                type="email"
            />
            <Input 
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                // error={usernameError}
            />
            <Input 
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                // error={usernameError}
            />
            <Input 
                placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                // error={usernameError}
            />
            <Input 
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                // error={passwordError}
            />
            <Input 
                placeholder="Re type password"
                type="password"
                value={rePassword}
                onChange={e => setRePassword(e.target.value)}
                // error={passwordError}
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