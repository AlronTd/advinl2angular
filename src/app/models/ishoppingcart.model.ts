import { IProduct } from './i-product';
import { CartProduct } from './cart-product';

export class ShoppingCart {
    cart: Array<CartProduct> = []
    getTotalQuantity(){
        let total: number = 0
        this.cart.forEach(item => {
            total += item.quantity
        });
        return total
    }
    getTotalPrice(){
        let total: number = 0
        this.cart.forEach(item => {
            total += item.price * item.quantity
        });
        return total
    }
}