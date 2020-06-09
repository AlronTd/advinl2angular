import { Injectable } from '@angular/core';
import { IState } from '../models/istate.model';
import { Store } from '@ngrx/store';
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions'
import { IProduct } from '../models/i-product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private store: Store<IState>) { }

  add(product: IProduct) {
    this.store.dispatch(new ShoppingCartActions.Add(product))
  }

  remove(id) {
    this.store.dispatch(new ShoppingCartActions.Remove(id))
  }
}
