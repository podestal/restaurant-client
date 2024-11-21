import axios from "axios"

const URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
    baseURL: URL,
    withCredentials: true,
})

class APIClient<ResponseType, RequestType = ResponseType> {
    endpoint: string

    constructor( endpoint: string) {
        this.endpoint = endpoint
    }
    
    get = (access?: string, SessionId?: string, year?: number, month?: number) => {

        const config: any = {
            headers: { 'Session-ID': SessionId}
        };
        if (year && month) {
            config.params = { month, year, day: 21 }
        }
        if (access) {
            config.headers = { ...config.headers, Authorization: `JWT ${access}` };
        }
    
        return axiosInstance
            .get<ResponseType>(this.endpoint, config)
            .then(res => res.data);
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

    update = (data: RequestType, access?: string) => {

        const config: any = {}
        if (access) {
            config.headers = { Authorization: `JWT ${access}` }
        }

        return axiosInstance
            .put<ResponseType>(this.endpoint, data, config)
            .then(res => res.data)
    }

    delete = (access?: string) => {

        const config: any = {}

        if (access) {
            config.headers = { Authorization: `JWT ${access}` }
        }

        return axiosInstance
            .delete<ResponseType>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient