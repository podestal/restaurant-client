import { useEffect, useState } from "react"
import useGetBill from "../../hooks/api/bill/useGetBill"
import useAuthStore from "../../hooks/store/useAuthStore"
import { TableType } from "../../services/api/tableService"
import CreateBill from "./CreateBill"
import Orders from "../orders/Orders"
import CreateOrder from "../orders/CreateOrder"
import RemoveBill from "./RemoveBill"
import Tabs from "../ui/Tabs"
import BillCard from "./BillCard"
import useLanguageStore from "../../hooks/store/useLanguageStore"

interface Props {
    table: TableType
    enable: boolean
}
    
const Bill = ({ table, enable }: Props) => {

    const [enableCreateOrder, setEnableCreateOrder] = useState(true)
    const [allowRemoveBill, setAllowRemoveBill] = useState(false)
    const tableId = table.id || 0
    const access = useAuthStore(s => s.access) || ''
    const {data: bill, isLoading, isError, error, isSuccess} = useGetBill({ access, tableId: table.id, enable })
    const lan = useLanguageStore(s => s.lan)


    useEffect(() => {
        console.log(bill)
    }, [bill]) 

    if (isLoading) return <p className="w-full flex justify-center items-center animate-pulse">Loading ...</p>

    if (isError) return <p>Error {error.message}</p>

    if (isSuccess)

  return (
    <>
        {table.status === 'V' 
        ?
        <CreateBill 
            tableId={table.id}
            setEnableCreateOrder={setEnableCreateOrder}
        />
        :
        <Tabs
            tabs={[
            {
                label: lan === 'EN' ? 'Orders' : 'Ordenes',
                content: 
                    <div className="flex flex-col justify-start items-center gap-6">
                        <div className="w-full flex justify-between items-start mb-2">
                            <h2 className="text-2xl font-poppins font-semibold">{lan === 'EN' ? 'Table' : 'Mesa'} #{table.number}</h2>
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
                            billId={bill[0]?.id}
                        />
                </div>,
            },
            {
                label: lan === 'EN' ? 'Bill' : 'Cuenta',
                content: 
                <BillCard 
                    table={table}
                    bill={bill[0]}
                    allowRemoveBill={allowRemoveBill}
                />,
            },
            ]}
        />
        }

    </>
  )
}

export default Bill