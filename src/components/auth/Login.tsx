import { useState } from "react"
import useLogin from "../../hooks/auth/useLogin"
import Button from "../ui/Button"
import Input from "../ui/Input"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"
import { useNavigate } from "react-router-dom"
import useLanguageStore from "../../hooks/store/useLanguageStore"

const Login = () => {

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const login = useLogin()
    const { setShow, setType, setMessage } = useNotificationsStore()
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const lan = useLanguageStore(s => s.lan)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUsernameError('')
        setPasswordError('')

        if (!email) {
            setUsernameError('Username is required')
            return
        }

        if (!password) {
            setPasswordError('Password is required')
            return
        }

        setLoading(true)
        login.mutate(
            { credentials: { email, password } },
            { 
            onSettled: () => {  
                setLoading(false)
            },
            onSuccess: () => {
                navigate('/menu')
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
    <div className="w-[20%] mx-auto">
        <h2 className="text-4xl font-bold font-palanquin text-center mb-12 mt-36">{lan === 'EN' ? 'Login' : 'Accede'}</h2>
        <form 
            onSubmit={handleLogin}
            className="w-full h-[60%] flex flex-col justify-start items-center gap-6">
            <Input 
                placeholder={lan === 'EN' ? "Email" : 'Correo Electrónico'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={usernameError}
                
            />
            <Input 
                placeholder={lan === 'EN' ? "Password" : 'Contraseña'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                error={passwordError}
            />
            <Button 
                label={lan === 'EN' ? 'Login' : 'Accede'}
                loading={loading}
            />
        </form>
        {/* <p className="text-sm mt-6">Do not have an account? <Link className="dark:text-blue-600 text-blue-700 font-semibold hover:text-blue-500" to='/signup'>Register</Link></p> */}
    </div>
  )
}

export default Login