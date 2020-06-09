import { createReducer, on } from '@ngrx/store'
import { get, add, remove } from '../actions/product-catalog.action'

export const initalState = []

const _productcatalogReducer = createReducer(initalState,
    on(get, state => state),
    on(add, (state, { product }) => [...state, product]),
    on(remove, (state, { id }) => state.filter(item => item.id !== id))
)

export function ProductcatalogReducer(state, action) {
    return _productcatalogReducer(state, action)
}