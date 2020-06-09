import { Actions } from '../actions/shoppingcart.actions'
import { ActionTypes } from '../actiontypes'
import { ShoppingCart } from 'src/app/models/ishoppingcart.model'
import { CartProduct } from 'src/app/models/cart-product'

const initialState: ShoppingCart = new ShoppingCart()

function setCart(cart: CartProduct[]) {
    const state = new ShoppingCart()
    state.cart = cart
    return state
}

function setProductQuantity(cart: CartProduct[], index: number, quantity: number) {
    const toReturn = new ShoppingCart()
    const product = new CartProduct(cart[index])
    product.quantity = quantity
    for (let i = 0; i < cart.length; i++) {
        if (i !== index) {
            toReturn.cart[i] = cart[i]
        } else {
            toReturn.cart[i] = product
        }
    }
    return toReturn
}

// function tally(state: ShoppingCart) {
//     state.totalQuantity = 0
//     state.cart.forEach(item => {
//         state.totalQuantity += item.quantity
//     });
//     state.totalPrice = 0
//         this.cart.forEach(item => {
//             state.totalPrice += item.price 
//         });
//         return total
// }

export function ShoppingCartReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.SHOPPINGCART_ADD:
            let indexToAdd = state.cart.findIndex((item) => action.payload._id === item._id)
            if (indexToAdd === -1) {
                return setCart([...(state.cart), new CartProduct(action.payload)])
            } else {
                return setProductQuantity(state.cart, indexToAdd, state.cart[indexToAdd].quantity + 1)
            }

        case ActionTypes.SHOPPINGCART_REMOVE:
            let indexToRemove = state.cart.findIndex((item) => action.payload === item._id)
            if (state.cart[indexToRemove].quantity > 1) {
                return setProductQuantity(state.cart, indexToRemove, state.cart[indexToRemove].quantity - 1)
            } else {
                return setCart(state.cart.filter(item => item._id !== action.payload))
            }

        default:
            return state
    }
}