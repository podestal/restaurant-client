import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { JWTCredentials } from '../../services/auth/authClient'
import loginService, { JWT } from '../../services/auth/loginService'
import useAuthStore from '../store/useAuthStore'

import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
    user_id: number
  }

const useLogin = (setLoading: (val: boolean) => void): UseMutationResult<JWT, Error, JWTCredentials> => {
    const {setTokens, setUserId} = useAuthStore() 

    return useMutation({

        onMutate: () => setLoading(true), 
        mutationFn: (data: JWTCredentials) => loginService.post(data), 
        onSuccess: (jwtData: JWT) => {
            const decoded = jwtDecode<DecodedToken>(jwtData.access)
            
            setTokens(jwtData.access, jwtData.refresh)
            setUserId(decoded.user_id)
        },
        onError: (err) => {
            console.log(err) 
        },
        onSettled: () => setLoading(false), 
    });
}

export default useLogin