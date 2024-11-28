import APIClient from "./authClient"

export interface JWT {
    access: string  
    refresh: string 
}

export interface JWTCredentials {
    email: string
    password: string 
}

const loginService = new APIClient<JWT, JWTCredentials>('jwt/create/')

export default loginService