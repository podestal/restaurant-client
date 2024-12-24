import { useQueryClient } from "@tanstack/react-query"
import useAuthStore from "../../hooks/store/useAuthStore"
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"

const Logout = () => {

    const clearTokens = useAuthStore(s => s.clearTokens)
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const handleLogout = () => {
        clearTokens()
        queryClient.clear()
        navigate('/')
    }

  return (
    <div>
        <Button 
            label="Logout"
            color="red"
            onClick={handleLogout}
        />
    </div>
  )
}

export default Logout