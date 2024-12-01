import moment from "moment";
import { ChartData } from "../components/ui/Charts";
import { Item } from "../services/api/cartService";
import { OrderItem } from "../services/api/orderItemService";

export const getSubTotalCost = (cartItems: Item[]) => {
    return cartItems.reduce((accumulator, item) => {
        const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
        return accumulator += itemPrice
    }, 0)
}

export const transformOrderItems = (orderItems: OrderItem[]): ChartData[] => {
    const data = orderItems.reduce(( obj: any, orderItem ) => {
        const date = moment(orderItem.created_at).format('DD-MM')
        if (!obj[date]) {
            obj[date] = { name: date, orders: 0 }
        }
        obj[date].orders += orderItem.quantity 
        return obj
    }, {})

    return Object.values(data)
}

