import moment from "moment";
import { ChartData } from "../components/ui/Charts";
import { Item } from "../services/api/cartService";
import { OrderItem } from "../services/api/orderItemService";
import { jwtDecode } from "jwt-decode";

export const getSubTotalCost = (cartItems: Item[]) => {
    return cartItems.reduce((accumulator, item) => {
        const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
        return accumulator += itemPrice
    }, 0)
}

export const transformOrderItems = (orderItems: OrderItem[]): ChartData[] => {
    const data = orderItems.reduce(( obj: any, orderItem ) => {
        const date = moment(orderItem.created_at).format('DD')
        if (!obj[date]) {
            obj[date] = { name: date, quantity: 0, sales: 0 }
        }
        obj[date].quantity += orderItem.quantity
        obj[date].sales += orderItem.quantity * orderItem.cost
        return obj
    }, {})

    return Object.values(data)
}

export const orderItemsSalesByCategory = (orderItems: OrderItem[]): ChartData[] => {
    const data = orderItems.reduce(( obj: any, orderItem ) => {
        if (!obj[orderItem.category_name]) {
            obj[orderItem.category_name] = { name: orderItem.category_name, quantity: 0, sales: 0 }
        }
        obj[orderItem.category_name].quantity += orderItem.quantity
        obj[orderItem.category_name].sales += orderItem.quantity * orderItem.cost
        return obj
    }, {})

    return Object.values(data)
}

interface Payload {
    exp: number
}

export const isTokenExpired = (token: string) => {
    try {
        const { exp } = jwtDecode<Payload>(token)
        const currentTime = Math.floor(Date.now() / 1000)
        return exp < currentTime
    } catch (error) {
        return true
    }
}