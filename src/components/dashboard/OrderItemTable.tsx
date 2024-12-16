import moment from "moment"
import { OrderItem } from "../../services/api/orderItemService"
import Input from "../ui/Input"
import { useState } from "react"
import Button from "../ui/Button"
import Selector from "../ui/Selector"
import Calendar from "../ui/Calendar"
import { motion } from "framer-motion"
import { RiArrowDownSFill } from "@remixicon/react"

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
    timeFilter: number
    setTimeFilter: React.Dispatch<React.SetStateAction<number>>
    selectedDate: Date | undefined
    setSelectedDate:  React.Dispatch<React.SetStateAction<Date | undefined>>
}

const OrderItemTable = ({ orderItems, month, setMonth, year, setYear, timeFilter, setTimeFilter, selectedDate, setSelectedDate }: Props) => {

    const [sortKey, setSortKey] = useState<keyof OrderItem | null>(null)
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

    const [filterByName, setFilterByName] = useState('')
    const [filterByCategory, setFilterByCategory] = useState('')
    const filteredOrderItems = orderItems
        .filter( orderItem => timeFilter === 2 ? (orderItem.created_at).toString() === moment(selectedDate).format('YYYY-MM-DD') : orderItem)
        // .filter( orderItem => orderItem?.category_name.toLowerCase().includes(filterByCategory?.toLowerCase()) )
        // .filter( orderItem => orderItem?.name.toLowerCase().includes(filterByName.toLowerCase()))

    const sortOrderItems = filteredOrderItems.sort((a, b) => {

        if (!sortKey) return 0

        const aValue = a[sortKey]
        const bValue = b[sortKey]

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortOrder === 'asc'
            ? aValue - bValue
            : bValue - aValue
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sortOrder === 'asc' 
            ? aValue.toLowerCase().localeCompare(bValue.toLowerCase()) 
            : bValue.toLowerCase().localeCompare(aValue.toLowerCase())
        }

        if (sortKey === "created_at") {
            const dateA = new Date(aValue).getTime();
            const dateB = new Date(bValue).getTime();
            return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    }

        return 0
    })
    

    const handleSort = (key: keyof OrderItem) => {
        
        if (sortKey === key) {
            setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
        } else {
            setSortKey(key)
            setSortOrder('asc')
        }
        
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
            <Input 
                placeholder="Look by category ..."
                value={filterByCategory}
                onChange={e => setFilterByCategory(e.target.value)}
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
                <p className="text-sm font-poppins">{month}/{year}</p>
                <Button 
                    label=">"
                    onClick={handleNextDate}
                />
            </div>
            }
        </div>
        <div className="w-full grid grid-cols-7 dark:bg-slate-900 bg-gray-200 font-bold p-2 mt-6">
            <div onClick={() => handleSort("name")} className="flex py-1 col-span-2 text-left hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
                <p>Name</p> 
                <RiArrowDownSFill 
                    className={`${sortKey === 'name' && sortOrder === 'desc' ? 'rotate-180' : ''}`}
                />
            </div>
            <div onClick={() => handleSort("category_name")} className="flex py-1 text-left hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
                <p>Category</p>
                <RiArrowDownSFill 
                    className={`${sortKey === 'category_name' && sortOrder === 'desc' ? 'rotate-180' : ''}`}
                />
            </div>
            <div onClick={() => handleSort("created_at")} className="flex py-1 text-left hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
                <p>Created At</p>
                <RiArrowDownSFill 
                    className={`${sortKey === 'created_at' && sortOrder === 'desc' ? 'rotate-180' : ''}`}
                />
            </div>
            <div onClick={() => handleSort("quantity")} className="flex py-1 text-left hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
                <p>Quantity</p>
                <RiArrowDownSFill 
                    className={`${sortKey === 'quantity' && sortOrder === 'desc' ? 'rotate-180' : ''}`}
                />
            </div>
            <div onClick={() => handleSort("cost")} className="flex py-1 text-left hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
                <p>Cost</p>
                <RiArrowDownSFill 
                    className={`${sortKey === 'cost' && sortOrder === 'desc' ? 'rotate-180' : ''}`}
                />
            </div>
            <div className="flex py-1 text-left hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
                <p>Total</p>
                {/* <RiArrowDownSFill 
                    className={`${sortKey === 'category_name' && sortOrder === 'desc' ? 'rotate-180' : ''}`}
                /> */}
            </div>
        </div>
        {sortOrderItems.map( orderItem => (
            <motion.div 
                layout
                key={orderItem.id} 
                className="w-full grid grid-cols-7 px-2 py-4 font-palanquin text-left hover:bg-slate-100 dark:hover:bg-slate-900">
                <>{console.log('cost type', typeof(orderItem.cost))}</>
                <p className="col-span-2">{orderItem.name}</p>
                <p>{orderItem.category_name}</p>
                <p>{moment(orderItem.created_at).format('DD MMM YYYY')}</p>
                <p>{orderItem.quantity}</p>
                <p>{(orderItem.cost / orderItem.quantity).toFixed(2)}</p>
                <p>{orderItem.cost}</p>
            </motion.div>
        ))}
    </div>
  )
}

export default OrderItemTable