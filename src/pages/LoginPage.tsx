import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

const LoginPage = () => {

  return (
    <div className="2xl:max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold font-palanquin text-center mb-12 mt-36">Login</h2>
        <form className="w-full h-[60%] flex flex-col justify-start items-center gap-6">
            <Input 
                placeholder="Username"
            />
            <Input 
                placeholder="Password"
                type="password"
            />
            <Button 
                label="Login"
            />
        </form>
    </div>
  )
}

export default LoginPage