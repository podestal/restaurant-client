import { RiRestaurant2Fill } from '@remixicon/react'

interface Props {
    totalDishes: number
}

const TotalDishes = ({ totalDishes }: Props) => {
  return (
    <div className="bg-blue-600 px-6 py-10 rounded-2xl flex justify-evenly items-start gap-12 h-[180px]">
        <RiRestaurant2Fill size={50}/>
        <div className="flex flex-col h-full gap-4 items-center justify-between">
            <h2 className="text-5xl font-poppins  font-bold">{totalDishes}</h2>
            <p className="text-2xl font-palanquin">Today's Dishes Sold</p>
        </div>
    </div>
  )
}

export default TotalDishes