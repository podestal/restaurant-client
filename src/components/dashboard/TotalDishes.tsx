import { RiRestaurant2Fill } from '@remixicon/react'

interface Props {
    totalDishes: number
    timeFilter: number
}

const TotalDishes = ({ totalDishes, timeFilter }: Props) => {
  return (
    <div className="bg-blue-600 px-6 py-10 rounded-2xl flex justify-evenly items-start gap-12 h-[180px] shadow-2xl shadow-slate-500 text-slate-50">
        <RiRestaurant2Fill size={50}/>
        <div className="flex flex-col h-full gap-4 items-center justify-between">
            <h2 className="text-4xl font-poppins  font-bold">{totalDishes}</h2>
            <p className="text-xl font-palanquin">{timeFilter === 2 ? `Daily` : `Monthly`} Dishes Sold</p>
        </div>
    </div>
  )
}

export default TotalDishes