interface Props {
    itemsLength:number
    setOpen: (value: React.SetStateAction<boolean>) => void
}

const CartItemsCount = ({ itemsLength, setOpen }: Props) => {
  return (
    <div 
        onClick={() => setOpen(true)}
        className="rounded-full bg-white font-bold text-blue-600 flex justify-center items-center text-[10px] absolute top-5 left-3 px-1 py-0 cursor-pointer">{itemsLength}</div>
  )
}

export default CartItemsCount