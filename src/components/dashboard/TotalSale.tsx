import { RiMoneyDollarBoxFill } from "@remixicon/react"

interface Props {
    totalSales: number
    timeFilter: number
    lan: string
}

const TotalSale = ({ totalSales, timeFilter, lan }: Props) => {
  return (
    <div className="bg-green-600 px-6 py-10 rounded-2xl flex justify-evenly items-start gap-12 h-[180px] shadow-2xl shadow-slate-500 text-slate-50">
        <RiMoneyDollarBoxFill size={50}/>
        <div className="flex flex-col h-full gap-4 items-center justify-between">
            <h2 className="text-4xl font-poppins  font-bold">$ {(totalSales).toFixed(2)}</h2>
            <div className={`text-xl font-palanquin flex justify-center gap-2 w-full ${lan === 'EN' && 'flex-row-reverse'}`}>
              <p>{lan === 'EN' ? 'Revenue' : 'Ingresos'} </p>
              <p>{timeFilter === 2 ? `${lan === 'EN' ? 'Daily' : 'Diarios'}` : `${lan === 'EN' ? 'Monthly' : 'Mensuales'}`}</p>
            </div>
        </div>
    </div>
  )
}

export default TotalSale