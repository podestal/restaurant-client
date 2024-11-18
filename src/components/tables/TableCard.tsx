import { useState } from "react"
import { TableType } from "../../services/api/tableService"
import Modal from "../ui/Modal"
import Table from "../ui/Table"
import Bill from "../bill/Bill"

interface Props {
    table: TableType
}

const TableCard = ({ table }: Props) => {
    
    const [open, setOpen] = useState(false)


  return (
    <>
        <div onClick={() => setOpen(true)}>
            <Table 
                tableNumber={String(table.number)} 
                guestName={table.guest_name} 
                status={table.status} 
                seats={table.seats} 
            />
        </div>
        <Modal 
            isOpen={open}
            onClose={() => setOpen(false)}
        >
            <Bill 
                table={table}
                enable={open}
            />
        </Modal>
    </>
  )
}

export default TableCard