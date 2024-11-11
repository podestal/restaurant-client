import { TableType } from "../../services/api/tableService"
import Table from "../ui/Table"

interface Props {
    table: TableType
}

const TableCard = ({ table }: Props) => {
    

  return (
    <Table tableNumber={String(table.number)} guestName={table.guest_name} status={table.status} seats={table.seats} />
  )
}

export default TableCard