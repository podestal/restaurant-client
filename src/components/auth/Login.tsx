import { useState } from "react"
import useLogin from "../../hooks/auth/useLogin"
import Button from "../ui/Button"
import Input from "../ui/Input"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = useLogin(setLoading)
    const { setShow, setType, setMessage } = useNotificationsStore()
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUsernameError('')
        setPasswordError('')

        if (!username) {
            setUsernameError('Username is required')
            return
        }

        if (!password) {
            setPasswordError('Password is required')
            return
        }

        login.mutate(
            { username, password },
            { onSuccess: () => {
                setLoading(false)
            },
            onError: error => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${error.message}`)
            }
            }
        )
    }

  return (
    <>
        <h2 className="text-4xl font-bold font-palanquin text-center mb-12 mt-36">Login</h2>
        <form 
            onSubmit={handleLogin}
            className="w-full h-[60%] flex flex-col justify-start items-center gap-6">
            <Input 
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                error={usernameError}
                
            />
            <Input 
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                error={passwordError}
            />
            <Button 
                label="Login"
                loading={loading}
            />
        </form>
    </>
  )
}

export default Login