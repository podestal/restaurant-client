interface Props {
    counter: number
    setCounter:React.Dispatch<React.SetStateAction<number>>
    counterError?: string
    setCounterError?:React.Dispatch<React.SetStateAction<string>>
}

const ItemCounter = ({ counter, setCounter, counterError, setCounterError }: Props) => {

    const handleDecrease = () => {
        if (counter <= 0) {
            return
        }
        setCounterError && setCounterError('')
        setCounter( prev => prev - 1)
    }

    const handleIncrease = () => {
        setCounterError && setCounterError('')
        setCounter( prev => prev + 1)
    }

  return (
    <div className="w-full flex flex-col gap-2">
        <div className="flex justify-center items-center gap-4">
            <div 
                onClick={handleDecrease}
                className="cursor-pointer rounded-full text-blue-700 hover:text-blue-500 font-bold text-2xl">-</div>
            <p>{counter}</p>
            <div 
                onClick={handleIncrease}
                className="cursor-pointer rounded-full text-blue-700 hover:text-blue-500 font-bold text-2xl">+</div>
        </div>
        {counterError && <p className="text-xs text-red-500 mx-2 text-center">{counterError}</p>}
    </div>
  )
}

export default ItemCounter