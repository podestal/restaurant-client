import { useEffect, useState } from 'react'
import { Bill } from '../../services/api/billService'
import { TableType } from '../../services/api/tableService'
import Invoice from './Invoice'
import RemoveBill from './RemoveBill'
import Ticket from './Ticket'
import Button from '../ui/Button'
import BillItemCard from './BillItemCard'
import BillTotal from './BillTotal'
import { getCorrelative } from '../../utils/billing'
import useUpdateBill from '../../hooks/api/bill/useUpdateBill'
import PrintBill from './PrintBill'
import useLanguageStore from '../../hooks/store/useLanguageStore'

interface Props {
    bill: Bill
    table: TableType
    allowRemoveBill: boolean
}

const BillCard = ({ bill, table, allowRemoveBill }: Props) => {

    const [show, setShow] = useState(false)
    const [disable, setDisable] = useState(bill.document === 'V' ? false : true)
    const [correlative, setCorrelative] = useState('')
    const [doctype, setDoctype] = useState<'T' | 'I'>('T')
    const updateBill = useUpdateBill({ tableId: table.id, billId: bill.id })
    const [successMsg, setSuccessMsg] = useState('')
    const lan = useLanguageStore(s => s.lan)

    useEffect(() => {
        getCorrelative({ setCorrelative, documentType: doctype })
    }, [doctype])

  return (
    <div>
        <div className="w-full flex justify-between items-start mb-2">
            <h2 className="text-2xl font-poppins font-semibold">{lan === 'EN' ? 'Table' : 'Mesa'} #{table.number}</h2>
            <RemoveBill 
                tableId={table.id}
                billId={bill.id}
                allowRemoveBill={allowRemoveBill}
            />
        </div>
        
        <div className="my-6 w-full flex justify-between items-center">
            {show 
            ? 
            <Invoice 
                orderItems={bill.order_items}
                setDoctype={setDoctype}
                correlative={correlative}
                setShow={setShow}
                setDisable={setDisable}
                setSuccessMsg={setSuccessMsg}
                updateBill={updateBill}
                lan={lan}
            /> 
            : 
            <>
                <Ticket 
                    orderItems={bill.order_items}
                    correlative={correlative}
                    updateBill={updateBill}
                    disable={disable}
                    setDisable={setDisable}
                    setSuccessMsg={setSuccessMsg}
                    lan={lan}
                />
                <Button 
                    label={lan === 'EN' ? 'Invoice' : 'Factura'}
                    disable={disable}
                    onClick={() => {
                        setDoctype('I')
                        setShow(true)}
                    }
                />
                <PrintBill 
                    setSuccessMsg={setSuccessMsg}
                    lan={lan}
                />
            </>
            }
        </div>
        <div className='w-full flex justify-center items-center'>
            {successMsg && <p className=' animate-pulse'>{successMsg} ...</p>}
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-4 my-6">
            {bill.order_items.map( orderItem => (
                <BillItemCard 
                    key={orderItem.id}
                    orderItem={orderItem}
                />
            ))}
            <BillTotal 
                orderItems={bill.order_items}
            />
        </div>
                </div>
  )
}

export default BillCard
