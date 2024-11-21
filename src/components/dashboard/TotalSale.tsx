import { RiMoneyDollarBoxFill } from "@remixicon/react"

interface Props {
    totalSales: number
}

const TotalSale = ({ totalSales }: Props) => {
  return (
    <div className="bg-green-600 px-6 py-10 rounded-2xl flex justify-evenly items-start gap-12 h-[180px] shadow-2xl shadow-slate-500">
        <RiMoneyDollarBoxFill size={50}/>
        <div className="flex flex-col h-full gap-4 items-center justify-between">
            <h2 className="text-4xl font-poppins  font-bold">$ {(totalSales).toFixed(2)}</h2>
            <p className="text-xl font-palanquin">Today's Revenue</p>
        </div>
    </div>
  )
}

export default TotalSale