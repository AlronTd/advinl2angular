import { createAction, props } from '@ngrx/store'
import { IProduct } from 'src/app/models/i-product'

export const get = createAction('[productcatalog] GET_PRODUCTCATALOG')
export const add = createAction('[productcatalog] ADD_PRODUCT', props<{ product: IProduct }>())
export const remove = createAction('[productcatalog] REMOVE_PRODUCT', props<{ id: string }>())