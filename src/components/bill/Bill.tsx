import { useEffect, useState } from "react"
import useGetBill from "../../hooks/api/bill/useGetBill"
import useAuthStore from "../../hooks/store/useAuthStore"
import { TableType } from "../../services/api/tableService"
import CreateBill from "./CreateBill"
import Orders from "../orders/Orders"
import CreateOrder from "../orders/CreateOrder"
import RemoveBill from "./RemoveBill"
import Tabs from "../ui/Tabs"

interface Props {
    table: TableType
    enable: boolean
}

const Bill = ({ table, enable }: Props) => {

    const [enableCreateOrder, setEnableCreateOrder] = useState(true)
    const [enableCreateBill, setEnableCreateBill] = useState(false)
    const [allowRemoveBill, setAllowRemoveBill] = useState(false)
    const tableId = table.id || 0
    const access = useAuthStore(s => s.access) || ''
    const {data: bill, isLoading, isError, error, isSuccess} = useGetBill({ access, tableId: table.id, enable })

    useEffect(() => {
        if (bill && bill[0]?.table === tableId) {
            setEnableCreateBill(false)
        } else {
            setEnableCreateBill(true)
        }
    }, [bill])

    if (isLoading) return <p>Loading</p>

    if (isError) return <p>Error {error.message}</p>

    if (isSuccess)

  return (
    <>
        {enableCreateBill 
        ?
        <CreateBill 
            tableId={table.id}
            setEnableCreateOrder={setEnableCreateOrder}
        />
        :
        <Tabs
            tabs={[
            {
                label: 'Orders',
                content: 
                    <div className="flex flex-col justify-start items-center gap-6">
                        <div className="w-full flex justify-between items-start mb-2">
                            <h2 className="text-2xl font-poppins font-semibold">Table #{table.number}</h2>
                            <RemoveBill 
                                tableId={tableId}
                                billId={bill[0]?.id}
                                allowRemoveBill={allowRemoveBill}
                            />
                        </div>
                        {enableCreateOrder && 
                        <CreateOrder 
                            tableId={table.id}
                        />}
                        <Orders 
                            tableId={table.id}
                            setEnableCreateOrder={setEnableCreateOrder}
                            setAllowRemoveBill={setAllowRemoveBill}
                        />
                </div>,
            },
            {
                label: 'Bill',
                content:
                    <div>
                        <div className="w-full flex justify-between items-start mb-2">
                            <h2 className="text-2xl font-poppins font-semibold">Table #{table.number}</h2>
                            <RemoveBill 
                                tableId={tableId}
                                billId={bill[0]?.id}
                                allowRemoveBill={allowRemoveBill}
                            />
                        </div>
                        
                </div>,
            },
            ]}
        />
        }

    </>
  )
}

export default Bill