interface Props {
    counter: number
    setCounter:React.Dispatch<React.SetStateAction<number>>
}

const ItemCounter = ({ counter, setCounter }: Props) => {

    const handleDecrease = () => {
        if (counter <= 0) {
            return
        }
        setCounter( prev => prev - 1)
    }

  return (
    <div className="flex justify-center items-center gap-4">
        <div 
            onClick={handleDecrease}
            className="cursor-pointer rounded-full text-blue-700 hover:text-blue-500 font-bold text-2xl">-</div>
        <p>{counter}</p>
        <div 
            onClick={() => setCounter( prev => prev + 1)}
            className="cursor-pointer rounded-full text-blue-700 hover:text-blue-500 font-bold text-2xl">+</div>
    </div>
  )
}

export default ItemCounter