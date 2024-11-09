import { RiDeleteBin2Fill } from "@remixicon/react"
import useRemoveCartItem from "../../hooks/api/cartItem/useRemoveCartItem"
import { Item } from "../../services/api/cartService"

interface Props {
    cartItem: Item
    cartId: number
}

const RemoveCardItem = ({ cartItem, cartId }: Props) => {

    const removeCartItem = useRemoveCartItem(cartId, cartItem.id)

    const handleRemoveCartItem = () => {
        removeCartItem.mutate({ access: '' })
    }

  return (
    <>
        <RiDeleteBin2Fill 
            className="text-red-500 hover:text-red-600 cursor-pointer"
            onClick={handleRemoveCartItem}
        />
    </>
  )
}

export default RemoveCardItem