import { UseQueryResult, useQuery } from "@tanstack/react-query"
import getSignupService, { User } from "../../services/auth/signupService"

interface Props {
    access: string
}

const useGetUser = ({ access }: Props): UseQueryResult<User, Error> => {

    const signupService = getSignupService({access})

    return useQuery({
        queryKey: ['User'],
        queryFn: () => signupService.get(access),
        staleTime: 1 * 60 * 1000,
        enabled: access ? true : false
    })
}

export default useGetUser