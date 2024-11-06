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

    get = (access: string) => {
        return axiosInstance
            .get<ResponseType>(this.endpoint, {
                headers: { Authorization: `JWT ${access}` }
            })
            .then(res => res.data)
    }

    post = (data: RequestType, access: string) => {
        return axiosInstance
            .post<ResponseType>(this.endpoint, data, {
                headers: { Authorization: `JWT ${access}` }
            })
            .then(res => res.data)
    }
}

export default APIClient