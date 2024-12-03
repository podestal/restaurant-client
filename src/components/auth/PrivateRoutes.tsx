import useAuthStore from "../../hooks/store/useAuthStore"
import { Navigate } from "react-router-dom"
import { isTokenExpired } from "../../utils/utilities"

interface Props {
    children: React.ReactNode
}

const PrivateRoutes = ({ children }: Props) => {

    const access = useAuthStore(s => s.access)

    if (!access || isTokenExpired(access)) {
        return <Navigate to='/login' replace/>
    }

  return (
    <>
        {children}
    </>
  )
}

export default PrivateRoutes