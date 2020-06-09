import { createReducer, on } from '@ngrx/store'
import { get, set } from '../actions/product-catalog.action'

export const initalState = []

const _productcatalogReducer = createReducer(initalState,
    on(get, state => state),
    on(set, (state, { product }) => product),
)

export function ProductcatalogReducer(state, action) {
    return _productcatalogReducer(state, action)
}