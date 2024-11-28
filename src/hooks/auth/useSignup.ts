import { UseMutationResult, useMutation } from "@tanstack/react-query"
import getSignupService, { UserCreate, User } from "../../services/auth/signupService"

interface SignupData {
    user: UserCreate
}

const useSignup = ():UseMutationResult<User, Error, SignupData> => {

    const signupService = getSignupService({})

    return useMutation({
        mutationFn: (data: SignupData) => signupService.post(data.user),
        onSuccess: res => console.log(res),
        onError: err => console.log(err)
    })
}

export default useSignup