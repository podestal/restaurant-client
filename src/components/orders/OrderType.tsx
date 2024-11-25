import { RiEBike2Fill, RiRestaurantFill, RiShoppingBag4Fill } from "@remixicon/react"

interface Props {
    orderType: string
}

const OrderType = ({ orderType }: Props) => {
  return (
    <>
        {orderType === 'I' && <RiRestaurantFill size={36}/>}
        {orderType === 'D' && <RiEBike2Fill size={36}/>}
        {orderType === 'T' && <RiShoppingBag4Fill size={36}/>}
    </>
  )
}

export default OrderType