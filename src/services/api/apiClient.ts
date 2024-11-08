import axios from "axios"

const URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
    baseURL: URL
})

class APIClient<ResponseType, RequestType = ResponseType> {
    endpoint: string

    constructor( endpoint: string) {
        this.endpoint = endpoint
    }

    get = (access?: string) => {

        const config: any = {}

        if (access) {
            config.headers = { Authorization: `JWT ${access}` }
        }

        return axiosInstance
            .get<ResponseType>(this.endpoint, config)
            .then(res => res.data)
    }

    post = (data: RequestType, access?: string, option?: string) => {

        const config: any = {}

        if (access) {
            config.headers = { Authorization: `JWT ${access}` }
        }

        if (option) {
            config.data =  { option }
        }

        return axiosInstance
            .post<ResponseType>(this.endpoint, data, config)
            .then(res => res.data)            
    }
}

export default APIClient