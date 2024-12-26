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
import useLanguageStore from "../../hooks/store/useLanguageStore"

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

    const lan = useLanguageStore(s => s.lan)
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
                console.log(lan === 'EN' ? 'This field is required' : 'Este campo es requerido');
                
                return
            }
        } else {
            if (dishLookup.length === 0) {
                setDishError(lan === 'EN' ? 'This field is required' : 'Este campo es requerido')
                return
            }
        }

        if (counter === 0) {
            setCounterError(lan === 'EN' ? 'You forgot the quantity' : 'Olvidaste la cantidad')
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
            label: lan === 'EN' ? 'Dishes' : 'Platos',
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
                    placeholder={lan === 'EN' ? "Observations ..." : 'Observaciones ...'}
                    value={observations}
                    onChange={e => setObservations(e.target.value)}
                />
                <Button 
                    label={lan === 'EN' ? "Add Dish" : 'Agregar Plato'}
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
                        setCost={setCost}
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
                            placeholder={lan === 'EN' ? "Observations ..." : 'Observaciones ...'}
                            value={observations}
                            onChange={e => setObservations(e.target.value)}
                        />
                        <div className="w-full flex justify-between">
                            <Button 
                                label={lan === 'EN' ? "Add Promo" : 'Agregar Promo'}
                            />
                            <Button 
                                label={lan === 'EN' ? "Go Back" : 'Volver'}
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