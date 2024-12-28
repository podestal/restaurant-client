import { useQuery, UseQueryResult } from "@tanstack/react-query"
import documentService, { Document } from "../../services/sunat/documentService" 

const useGetDocuments = (): UseQueryResult<Document[], Error> => {
    return useQuery({
        queryKey: ['documents'],
        queryFn: () => documentService.get(),
        staleTime: 1 * 60 * 1000,
    })
}

export default useGetDocuments