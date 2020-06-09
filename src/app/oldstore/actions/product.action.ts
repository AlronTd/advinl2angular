import { createAction, props } from '@ngrx/store'
import { IProduct } from 'src/app/models/i-product'

export const get = createAction('[product] GET_PRODUCTCATALOG')
export const add = createAction('[product] ADD_PRODUCT', props<{ product: IProduct }>())
export const remove = createAction('[product] REMOVE_PRODUCT', props<{ id: string }>())