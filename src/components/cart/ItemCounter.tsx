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
        <p 
            onClick={() => setCounter( prev => prev + 1)}
            className="cursor-pointer rounded-full text-blue-700 font-bold text-2xl">+</p>
        <p>{counter}</p>
        <p 
            onClick={handleDecrease}
            className="cursor-pointer rounded-full text-blue-700 font-bold text-2xl">-</p>
    </div>
  )
}

export default ItemCounter