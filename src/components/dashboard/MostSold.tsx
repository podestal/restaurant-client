import { RiRestaurantFill } from "@remixicon/react"

const MostSold = () => {
  return (
    <div className="bg-amber-600 px-6 py-10 rounded-2xl flex justify-evenly items-start gap-12 h-[180px] shadow-2xl shadow-slate-500">
        <RiRestaurantFill size={50}/>
        <div className="flex flex-col h-full gap-4 items-center justify-between">
            <h2 className="text-3xl font-poppins  font-bold">Ceviche Mixto</h2>
            <p className="text-xl font-palanquin">Dish of the Day</p>
        </div>
    </div>
  )
}

export default MostSold