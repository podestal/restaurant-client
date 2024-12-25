import { RiRestaurant2Fill } from '@remixicon/react'

interface Props {
    totalDishes: number
    timeFilter: number
    lan: string
}

const TotalDishes = ({ totalDishes, timeFilter, lan }: Props) => {
  return (
    <div className="bg-blue-600 px-6 py-10 rounded-2xl flex justify-evenly items-start gap-12 h-[180px] shadow-2xl shadow-slate-500 text-slate-50">
        <RiRestaurant2Fill size={50}/>
        <div className="flex flex-col h-full gap-4 items-center justify-between">
            <h2 className="text-4xl font-poppins  font-bold">{totalDishes}</h2>
            <div className={`text-xl font-palanquin flex justify-center gap-2 w-full ${lan === 'EN' && 'flex-row-reverse'}`}>
              <p>{lan === 'EN' ? 'Dishes Sold' : 'Platos Vendidos'} </p>
              <p>{timeFilter === 2 ? `${lan === 'EN' ? 'Daily' : 'al día'}` : `${lan === 'EN' ? 'Monthly' : 'al mes'}`}</p>
            </div>
        </div>
    </div>
  )
}

export default TotalDishes