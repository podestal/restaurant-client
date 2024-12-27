import { RiDeleteBin2Fill } from "@remixicon/react"
import useAuthStore from "../../hooks/store/useAuthStore"
import useRemovePromotionItem from "../../hooks/api/promotionItem/useRemovePromotionItem"
import useNotificationsStore from "../../hooks/store/useNotificationsStore"

interface Props {
    promotionId: number
    promotionItemId: number
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const RemovePromotionItem = ({ promotionItemId, promotionId, setLoading }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const removePromotionItem = useRemovePromotionItem({ promotionItemId, promotionId })
    const { setShow, setType, setMessage } = useNotificationsStore()
    

    const handleRemove = () => {
        setLoading(true)
        removePromotionItem.mutate({ access }, {
          onError: err => {
            setShow(true)
            setType('error')
            setMessage(`Error: ${err}`)
          },
          onSettled: () => {
            setLoading(false)
          }
        })
    }

  return (
    <RiDeleteBin2Fill 
        className="text-red-600 hover:text-red-700 cursor-pointer"
        onClick={handleRemove}
    />
  )
}

export default RemovePromotionItem