import useGetDocuments from "../../hooks/sunat/useGetDocuments"

const Documents = () => {

    const { data: documents, isLoading, isError, error, isSuccess } = useGetDocuments()

    if (isLoading) return <p>Loading...</p>

    if (isError) return <p>{error?.message}</p>

    if (isSuccess)

  return (
    <div>
        {documents.map( document => (
            <div key={document.id}>
                <p>{document.id}</p>
                <p>{document.type}</p>
            </div>
        ))}
    </div>
  )
}

export default Documents