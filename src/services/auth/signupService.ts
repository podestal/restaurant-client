import AuthClient from "./authClient"

export interface User {
    id: number
    email: string
    first_name: string
    last_name: string
    phone: string
    groups: string[]
}

export type UserCreate = Omit<User, "id"> & {
    password: string
}

interface Props {
    access?: string
}

const getSignupService = ({ access }: Props) => {
    const URL = access ? 'users/me/' : 'users/'
    return new AuthClient<User, UserCreate>(URL)
}

export default getSignupService