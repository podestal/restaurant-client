import AuthClient from "./authClient"

export interface JWTRefresh {
    access: string
}

export interface CreateJWTRefresh {
    refresh: string
}

const refreshService = new AuthClient<JWTRefresh, CreateJWTRefresh>('jwt/refresh/')

export default refreshService