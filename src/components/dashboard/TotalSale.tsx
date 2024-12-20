import { RiMoneyDollarBoxFill } from "@remixicon/react"

interface Props {
    totalSales: number
    timeFilter: number
}

const TotalSale = ({ totalSales, timeFilter }: Props) => {
  return (
    <div className="bg-green-600 px-6 py-10 rounded-2xl flex justify-evenly items-start gap-12 h-[180px] shadow-2xl shadow-slate-500 text-slate-50">
        <RiMoneyDollarBoxFill size={50}/>
        <div className="flex flex-col h-full gap-4 items-center justify-between">
            <h2 className="text-4xl font-poppins  font-bold">$ {(totalSales).toFixed(2)}</h2>
            <p className="text-xl font-palanquin">{timeFilter === 2 ? `Daily` : `Monthly`} Revenue </p>
        </div>
    </div>
  )
}

export default TotalSale