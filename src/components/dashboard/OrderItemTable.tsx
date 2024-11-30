import moment from "moment"
import { OrderItem } from "../../services/api/orderItemService"
import Input from "../ui/Input"
import { useState } from "react"
import Button from "../ui/Button"
import Selector from "../ui/Selector"
import Calendar from "../ui/Calendar"

const timeFilters = [
    { id: 1, name:'Filter by Month' }, 
    {id: 2, name: 'Filter by Day'}
]

interface Props {
    orderItems: OrderItem[]
    month: number
    setMonth: React.Dispatch<React.SetStateAction<number>>
    year: number
    setYear: React.Dispatch<React.SetStateAction<number>>
}

const OrderItemTable = ({ orderItems, month, setMonth, year, setYear }: Props) => {

    const [filterByName, setFilterByName] = useState('')
    const [timeFilter, setTimeFilter] = useState(1)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
    const filteredOrderItems = orderItems
        .filter( orderItem => timeFilter === 2 ? (orderItem.created_at).toString() === moment(selectedDate).format('YYYY-MM-DD') : orderItem)
        .filter( orderItem => orderItem.name.toLowerCase().includes(filterByName.toLowerCase()))

    console.log(orderItems);
    

    const handleSort = (key: keyof OrderItem) => {
        console.log(key);
        
    }   

    const handleNextDate = () => {
        if (month === 12) {
            setMonth(1)
            setYear(prev => prev + 1)
            return
        }
        setMonth( prev => prev + 1)
    }

    const handlePrevDate = () => {
        if (month === 1) {
            setMonth(12)
            setYear(prev => prev -1)
            return
        }
        setMonth( prev => prev - 1)
    }

  return (
    <div className="mt-16">
        <div className=" flex justify-start items-center gap-12">
            <Input 
                placeholder="Look by dish ..."
                value={filterByName}
                onChange={e => setFilterByName(e.target.value)}
            />
            <Selector 
                values={timeFilters}
                defaultValue={1}
                label=""
                setter={setTimeFilter}
            />

            {timeFilter === 2 ? 
            <Calendar 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            :
            <div className="flex justify-evenly items-center w-full">
                <Button 
                    label="<"
                    onClick={handlePrevDate}
                />
                <p className="text-xl font-poppins">{month}/{year}</p>
                <Button 
                    label=">"
                    onClick={handleNextDate}
                />
            </div>
            }
        </div>
        <div className="w-full grid grid-cols-7 dark:bg-slate-900 bg-gray-200 font-bold p-2 mt-6">
            <button onClick={() => handleSort("id")} className="py-1 text-left">
            ID
            </button>
            <button onClick={() => handleSort("name")} className=" py-1 col-span-2 text-left ">
            Name
            </button>
            <button onClick={() => handleSort("created_at")} className=" py-1 text-left">
            Created At
            </button>
            <button onClick={() => handleSort("quantity")} className="py-1 text-left">
            Quantity
            </button>
            <button onClick={() => handleSort("cost")} className=" py-1 text-left">
            Cost
            </button>
            <button className="py-1 text-left">
            Total
            </button>
        </div>
        {filteredOrderItems.map( orderItem => (
            <div key={orderItem.id} className="w-full grid grid-cols-7 px-2 py-4 font-palanquin text-left hover:bg-slate-100 dark:hover:bg-slate-900">
                <p>{orderItem.id}</p>
                <p className="col-span-2">{orderItem.name}</p>
                <p>{moment(orderItem.created_at).format('DD MMM YYYY')}</p>
                <p>{orderItem.quantity}</p>
                <p>{orderItem.cost}</p>
                <p>{(orderItem.quantity * orderItem.cost).toFixed(2)}</p>
            </div>
        ))}
    </div>
  )
}

export default OrderItemTable