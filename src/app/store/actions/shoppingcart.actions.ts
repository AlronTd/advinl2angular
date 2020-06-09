import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IProduct } from 'src/app/models/i-product'

export class Add implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_ADD
    constructor(public payload: IProduct) {}
}

export class Remove implements Action {
    public readonly type = ActionTypes.SHOPPINGCART_REMOVE
    constructor(public payload: string) {}
}

export type Actions = Add | Remove