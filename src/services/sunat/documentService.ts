import SunatClient from "./sunatClient"


export interface Document {
    fileName: string
    id: string
    issueTime: number
    status: string
    type: string
}

const personaId = import.meta.env.VITE_PERSONAL_ID
const personaToken = import.meta.env.VITE_PERSONAL_TOKEN

export default new SunatClient<Document>(`/documents/getAll?personaId=${personaId}&personaToken=${personaToken}&limit=100`)