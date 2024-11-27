import { Item } from "../services/api/cartService";

export const getSubTotalCost = (cartItems: Item[]) => {
    return cartItems.reduce((accumulator, item) => {
        const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
        return accumulator += itemPrice
    }, 0)
}

