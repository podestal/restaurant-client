import useGetTables from "../../hooks/api/tables/useGetTables"
import useAuthStore from "../../hooks/store/useAuthStore"
import TableCard from "./TableCard"
import { motion } from 'framer-motion'
import useLoader from "../../hooks/ui/useLoader"

const Tables = () => {

    const access = useAuthStore(s => s.access) || ''
    const { data: tables, isLoading, isError, error, isSuccess } = useGetTables(access)

    useLoader(isLoading)

    if (isError) return <p>Error: {error.message}</p>

    if (isSuccess)

  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-8 min-h-screen mx-auto place-items-center">
        {tables.map( table => (
            <TableCard 
                key={table.id}
                table={table}
            />
        ))}
    </motion.div>
  )
}

export default Tables