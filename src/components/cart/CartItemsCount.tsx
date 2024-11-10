import { Item } from "../../services/api/cartService"

interface Props {
    items: Item[]
    setOpen: (value: React.SetStateAction<boolean>) => void
}

const CartItemsCount = ({ items, setOpen }: Props) => {

    const count = items.reduce((accumulator, item) => {
        return accumulator += item.quantity
    }, 0)

  return (
    <div 
        onClick={() => setOpen(true)}
        className="rounded-full bg-white font-bold text-blue-600 flex justify-center items-center text-[10px] absolute top-5 left-3 px-1 py-0 cursor-pointer">{count}</div>
  )
}

export default CartItemsCount