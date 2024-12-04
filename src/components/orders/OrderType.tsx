import { RiEBike2Fill, RiRestaurantFill, RiShoppingBag4Fill } from "@remixicon/react"

interface Props {
    orderType: string
    size?: number
    color?: string
}

const OrderType = ({ orderType, size=36, color }: Props) => {
  return (
    <>
        {orderType === 'I' && <RiRestaurantFill size={size} className={`text-${color}`}/>}
        {orderType === 'D' && <RiEBike2Fill size={size} className={`text-${color}`}/>}
        {orderType === 'T' && <RiShoppingBag4Fill size={size} className={`text-${color}`}/>}
    </>
  )
}

export default OrderType