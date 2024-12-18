import { useEffect, useState } from "react"
import useGetBill from "../../hooks/api/bill/useGetBill"
import useAuthStore from "../../hooks/store/useAuthStore"
import { TableType } from "../../services/api/tableService"
import CreateBill from "./CreateBill"
import Orders from "../orders/Orders"
import CreateOrder from "../orders/CreateOrder"
import RemoveBill from "./RemoveBill"
import Tabs from "../ui/Tabs"
import BillTotal from "./BillTotal"
import BillItemCard from "./BillItemCard"
import Button from "../ui/Button"
import Ticket from "./Ticket"
import Invoice from "./Invoice"
import { getCorrelative } from "../../utils/billing"

interface Props {
    table: TableType
    enable: boolean
}

const Bill = ({ table, enable }: Props) => {

    const [show, setShow] = useState(false)
    const [enableCreateOrder, setEnableCreateOrder] = useState(true)
    const [allowRemoveBill, setAllowRemoveBill] = useState(false)
    const tableId = table.id || 0
    const access = useAuthStore(s => s.access) || ''
    const {data: bill, isLoading, isError, error, isSuccess} = useGetBill({ access, tableId: table.id, enable })
    const [correlative, setCorrelative] = useState('')
    const [doctype, setDoctype] = useState<'T' | 'I'>('T')
    const [print, setPrint] = useState(false)

    useEffect(() => {
        getCorrelative({ setCorrelative, documentType: doctype })
    }, [doctype])

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
                            billId={bill[0]?.id}
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
                        <div className="my-6 w-full flex justify-between items-center">
                            {!show && <Ticket 
                                orderItems={bill[0]?.order_items}
                                correlative={correlative}
                            />}
                            <Invoice 
                                orderItems={bill[0]?.order_items}
                                setDoctype={setDoctype}
                                correlative={correlative}
                                show={show}
                                setShow={setShow}
                            />
                            {!show && <Button 
                                label='Just Print'
                            />}
                        </div>
                        <div className="w-full flex flex-col justify-start items-center gap-4 my-6">
                            {bill[0]?.order_items.map( orderItem => (
                                <BillItemCard 
                                    key={orderItem.id}
                                    orderItem={orderItem}
                                />
                            ))}
                            <BillTotal 
                                orderItems={bill[0]?.order_items}
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