import useAuthStore from '../../hooks/store/useAuthStore'
import useGetUser from '../../hooks/auth/useGetUser'
import AnonymousUserForm from './AnonymousUserForm'
import OrderTotal from './OrderTotal'
import { Cart } from '../../services/api/cartService'

interface Props {
    cart: Cart
}

const Checkout = ({ cart }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const {data: user, isLoading, isError, error, isSuccess} = useGetUser({access})

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>Error {error.message}</p>

    if (isSuccess || !access)

  return (
    <div className="w-full grid grid-cols-3 h-full mt-24">
        <AnonymousUserForm 
            cartId={cart.id}
            user={user}
        />
        <OrderTotal />
    </div>
  )
}

export default Checkout