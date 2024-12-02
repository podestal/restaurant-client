import { useLocation, useNavigate } from "react-router-dom";
import { OrderItem } from "../services/api/orderItemService";
import Button from "../components/ui/Button";

const OrderSuccesspage = () => {

  const location = useLocation()
  const orderId = location.state.order.id
  const items = location.state.order.order_items
  const totalAmount =  location.state.amount
  const subTotal = location.state.subTotal
  const navigate = useNavigate()


  return (
<div className="w-full mx-auto py-6 flex flex-col justify-start items-start">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-4">Thank You for Your Order!</h1>
      <p className="text-center mb-6">
        Your order <span className="font-bold">#{orderId}</span> has been successfully placed.
      </p>

      <div className="w-[50%] mb-6">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        <ul >
          {items.map((item: OrderItem, index:number) => (
            <li key={index} className="py-2 flex justify-between">
              <span>- {item.name} (x{item.quantity})</span>
              <span>${item.cost}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between font-semibold">
          <span>Sub Total:</span>
          <span>${(subTotal).toFixed(2)}</span>
        </div>
        <div className="mt-4 flex justify-between font-semibold">
          <span>Taxes:</span>
          <span>${(subTotal * 0.19).toFixed(2)}</span>
        </div>
        <div className="mt-4 flex justify-between font-semibold">
          <span>Total:</span>
          <span>${(totalAmount / 100).toFixed(2)}</span>
        </div>
      </div>

      {/* <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Estimated Delivery Time</h2>
        <p className="text-gray-700">{estimatedTime}</p>
      </div> */}

      <div className="flex flex-col space-y-3">
        <Button 
          label="Go back to menu"
          onClick={() => navigate('/menu')}
        />
      </div>
    </div>

  )
}

export default OrderSuccesspage