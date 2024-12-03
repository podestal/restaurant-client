import { UseMutationResult, useMutation } from "@tanstack/react-query"
import refreshService, { JWTRefresh, CreateJWTRefresh } from "../../services/auth/refreshService"
import useAuthStore from "../store/useAuthStore"

interface RefreshData {
    refresh: CreateJWTRefresh
}

const useRefresh = ( refreshToken: string ):UseMutationResult<JWTRefresh, Error, RefreshData> => {

    const setTokens = useAuthStore(s => s.setTokens) 

    return useMutation({
        mutationFn: (data: RefreshData) => refreshService.post(data.refresh),
        onSuccess: res => {
            console.log(res)
            setTokens(res.access, refreshToken)
        },
        onError: err => {
            console.log(err)
        }
    })
}

export default useRefresh