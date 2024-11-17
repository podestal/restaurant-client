import { RiDeleteBin2Fill } from "@remixicon/react"
import useAuthStore from "../../hooks/store/useAuthStore"
import useRemoveOrderItem from "../../hooks/api/orderItem/useRemoveOrderItem"

interface Props {
    tableId: number
    orderItemId: number
}

const RemoveOrderItem = ({ tableId, orderItemId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const removeOrderItem = useRemoveOrderItem({ tableId, orderItemId })

    const handleRemove = () => {
        removeOrderItem.mutate({ access })
    }

  return (
    <RiDeleteBin2Fill 
        className="text-red-600 hover:text-red-800 cursor-pointer mt-2"
        onClick={handleRemove}
    />
  )
}

export default RemoveOrderItem