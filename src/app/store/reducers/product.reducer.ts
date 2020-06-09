import { Actions } from '../actions/product.actions'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/i-product'
import { CartProduct } from 'src/app/models/cart-product'

const initialState: IProduct = { _id: '', name: '', short: '', desc: '', price: 0, image: '' }

export function ProductReducer(state = initialState, action: Actions) {
    switch(action.type) {
        case ActionTypes.PRODUCT_SET :
            return state = action.payload 

        case ActionTypes.PRODUCT_CLEAR :
            return state = initialState

        default: 
            return state
    }
}