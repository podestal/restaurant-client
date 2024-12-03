import useGetTables from "../../hooks/api/tables/useGetTables"
import useAuthStore from "../../hooks/store/useAuthStore"
import TableCard from "./TableCard"

const Tables = () => {

    const access = useAuthStore(s => s.access) || ''
    const { data: tables, isLoading, isError, error, isSuccess } = useGetTables(access)

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-8 min-h-screen mx-auto place-items-center">
        {tables.map( table => (
            <TableCard 
                key={table.id}
                table={table}
            />
        ))}
    </div>
  )
}

export default Tables