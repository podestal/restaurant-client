import axios from "axios"

const URL = import.meta.env.VITE_SUNAT_URL

const axiosInstance = axios.create({
    baseURL: URL,
})

class SunatClient<ResponseType> {
    endpoint: string

    constructor( endpoint: string) {
        this.endpoint = endpoint
    }
    
    get = () => {
        return axiosInstance
            .get<ResponseType>(this.endpoint)
            .then(res => res.data);
    }
}

export default SunatClient