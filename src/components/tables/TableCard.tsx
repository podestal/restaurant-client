import { useState } from "react"
import { TableType } from "../../services/api/tableService"
import Modal from "../ui/Modal"
import Table from "../ui/Table"
import Button from "../ui/Button"
import Orders from "../orders/Orders"

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
            <div className="flex flex-col justify-start items-center gap-6">
                <h2 className="text-2xl font-poppins font-semibold">Table #{table.number}</h2>
                <Button 
                    label="Open table"
                />
            </div>
            <Orders 
                tableId={table.id}
            />
        </Modal>
    </>
  )
}

export default TableCard