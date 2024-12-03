import useAuthStore from "../../hooks/store/useAuthStore"
import { Navigate } from "react-router-dom"
import { isTokenExpired } from "../../utils/utilities"
import useRefresh from "../../hooks/auth/useRefresh"

interface Props {
    children: React.ReactNode
}

const PrivateRoutes = ({ children }: Props) => {

    const access = useAuthStore(s => s.access)
    const refreshToken = useAuthStore(s => s.refresh) || ''
    const refresh = useRefresh(refreshToken)

    if (!access) {
        return <Navigate to='/login' replace/>
    }

    if (isTokenExpired(access)) {
        refresh.mutate(
            { refresh: {refresh: refreshToken} }, 
            { onError: () => {
                return <Navigate to='/login' replace/> 
            }}
        )
    }

  return (
    <>
        {children}
    </>
  )
}

export default PrivateRoutes