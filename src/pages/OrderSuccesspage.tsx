interface Props {
    orderId: string;
    estimatedTime: string;
    totalAmount: number;
    items: { name: string; quantity: number; price: number }[]; // Replace with your actual item structure
  }

const OrderSuccesspage = ({ orderId, estimatedTime, totalAmount, items }: Props) => {
  return (
<div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Thank You for Your Order!</h1>
      <p className="text-center text-gray-700 mb-6">
        Your order <span className="font-bold">#{orderId}</span> has been successfully placed.
      </p>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Order Summary</h2>
        <ul className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between font-semibold">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Estimated Delivery Time</h2>
        <p className="text-gray-700">{estimatedTime}</p>
      </div>

      <div className="flex flex-col space-y-3">
        <a
          href="/menu"
          className="w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          View Menu
        </a>
        <a
          href="/order-history"
          className="w-full text-center bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300"
        >
          View Your Orders
        </a>
        <a
          href="/support"
          className="w-full text-center bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
        >
          Contact Support
        </a>
      </div>
    </div>

  )
}

export default OrderSuccesspage