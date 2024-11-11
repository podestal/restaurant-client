import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getTableService, { TableType } from "../../../services/api/tableService"
import { TABLES_CACHE_KEY } from "../../../utils/keys"

const useGetTables = (access: string): UseQueryResult<TableType[], Error> => {
    const tableService = getTableService()
    return useQuery({
        queryKey: TABLES_CACHE_KEY,
        queryFn: () => tableService.get(access),
        staleTime: 1 * 60 * 1000
    })
}

export default useGetTables