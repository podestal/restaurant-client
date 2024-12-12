import { useState } from "react"
import ItemCounter from "../cart/ItemCounter"
import TextArea from "../ui/TextArea"
import Button from "../ui/Button"
import { UseMutationResult } from "@tanstack/react-query"
import { OrderItem } from "../../services/api/orderItemService"
import { CreateOrderItemData } from "../../hooks/api/orderItem/useCreateOrderItem"
import DishLookup from "../dish/DishLookup"
import useAuthStore from "../../hooks/store/useAuthStore"
import PromoLookup from "../promotion/PromoLookup"
import Tabs from "../ui/Tabs"

interface Props {
    createOrderItem:  UseMutationResult<OrderItem, Error, CreateOrderItemData>
    orderId: number
    billId: number
}

export interface DishInfo {
    dishId: number
    dishCost: number
}

const OrderItemForm = ({ createOrderItem, orderId, billId }: Props) => {

    const access = useAuthStore(s => s.access) || ''
    const [counter, setCounter] = useState(0)
    const [dish, setDish] = useState(0)
    const [promotion, setPromotion] = useState(0)
    const [cost, setCost] = useState(0)
    const [observations, setObservations] = useState('')
    const [dishLookup, setDishLookup] = useState('')
    const [showPromos, setShowPromos] = useState(true)
    const [promoLookup, setPromoLookup] = useState('')

    // Error Hsndler
    const [dishError, setDishError] = useState('')
    const [counterError, setCounterError] = useState('')

    const handleCreateOrderItem = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setDishError('')

        if (showPromos === false) {
            if (promoLookup.length === 0) {
                console.log('This field is required');
                
                return
            }
        } else {
            if (dishLookup.length === 0) {
                setDishError('This field is required')
                return
            }
        }

        if (counter === 0) {
            setCounterError('You forgot the quantity')
            return
        }

        dish && createOrderItem.mutate({ 
            orderItem: { dish, quantity: counter, order: orderId, cost, observations, bill: billId }, 
            access 
        }, {
            onSuccess: () => {
                setDish(0)
                setCost(0)
                setObservations('')
                setCounter(0)
            }
        })

        promotion && createOrderItem.mutate({ 
            orderItem: { promotion, quantity: counter, order: orderId, cost, observations, bill: billId }, 
            access 
        }, {
            onSuccess: () => {
                setDish(0)
                setCost(0)
                setObservations('')
                setCounter(0)
                setShowPromos(true)
                setPromoLookup('')
            }
        })
    }

  return (
    <Tabs
        tabs={[
        {
            label: 'Dishes',
            content: 
            <form 
                onSubmit={handleCreateOrderItem}
                className="flex flex-col items-center justify-start my-6">
                <div className="w-full grid grid-cols-4 gap-4">
                    <DishLookup 
                        setDish={setDish}
                        setCost={setCost}
                        dishLookup={dishLookup}
                        setDishLookup={setDishLookup}
                        dishError={dishError}
                        setDishError={setDishError}
                    />
                    <ItemCounter 
                        counter={counter}
                        setCounter={setCounter}
                        counterError={counterError}
                        setCounterError={setCounterError}
                    />
                </div>
                <TextArea 
                    placeholder="Observations ..."
                    value={observations}
                    onChange={e => setObservations(e.target.value)}
                />
                <Button 
                    label="Add Dish"
                />
            </form>,
        },
        {
            label: 'Promos',
            content:
                <div>
                    {showPromos 
                    ? 
                    <PromoLookup 
                        setShowPromos={setShowPromos}
                        setPromoLookup={setPromoLookup}
                        setPromotion={setPromotion}
                    /> 
                    : 
                    <form
                        onSubmit={handleCreateOrderItem}
                    >
                        <div className="w-full grid grid-cols-4 gap-4">
                        <p className="col-span-3">{promoLookup && promoLookup}</p>
                        <ItemCounter 
                            counter={counter}
                            setCounter={setCounter}
                            counterError={counterError}
                            setCounterError={setCounterError}
                        />
                        </div>
                        <TextArea 
                            placeholder="Observations ..."
                            value={observations}
                            onChange={e => setObservations(e.target.value)}
                        />
                        <div className="w-full flex justify-between">
                            <Button 
                                label="Add Promo"
                            />
                            <Button 
                                label="Go Back"
                                onClick={() => {
                                    setPromoLookup('')
                                    setShowPromos(true)
                                }}
                            />
                        </div>
                    </form>
                    }
                </div>,
        },
        ]}
    />
  )
}

export default OrderItemForm