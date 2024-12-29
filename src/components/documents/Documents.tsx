import useLanguageStore from "../../hooks/store/useLanguageStore"
import useGetDocuments from "../../hooks/sunat/useGetDocuments"
import DocumentCard from "./DocumentCard"
import useLoader from "../../hooks/ui/useLoader"

const Documents = () => {

    const lan = useLanguageStore(s => s.lan)
    const { data: documents, isLoading, isError, error, isSuccess } = useGetDocuments()

    useLoader(isLoading)

    if (isError) return <p>{error?.message}</p>

    if (isSuccess)

  return (
    <div className="py-10">
        <div className="w-full grid grid-cols-4 gap-4  dark:bg-slate-900 bg-gray-200 font-bold p-2 place-items-center">
            <p>{lan === 'EN' ? 'Name' : 'Nombre'}</p>
            <p>{lan === 'EN' ? 'Issue Date' : 'Fecha de Emisión'}</p>
            <p>Status</p>
            <p>{lan === 'EN' ? 'Type' : 'Tipo'}</p>
        </div>
        {documents
            .sort((a, b) => b.issueTime - a.issueTime)
            .map( document => (
            <DocumentCard 
                key={document.id}
                document={document}
            />
        ))}
    </div>
  )
}

export default Documents