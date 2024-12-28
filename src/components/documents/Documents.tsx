import axios from "axios"
import { useEffect, useState } from "react"

const Documents = () => {

    const [documents, setDocuments] = useState([])
    const personaId = import.meta.env.VITE_PERSONAL_ID
    const personaToken = import.meta.env.VITE_PERSONAL_TOKEN

    useEffect(() => {
        axios.get(`https://back.apisunat.com/documents/getAll?personaId=${personaId}&personaToken=${personaToken}&limit=100`)
            .then(res => {
                console.log(res.data)
                // setDocuments(res.data)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div>Documents</div>
  )
}

export default Documents