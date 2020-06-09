import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';
import { ShoppingCart } from 'src/app/models/ishoppingcart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingcart: ShoppingCart
  
  hasItems(){
    return this.shoppingcart.cart.length > 0
  }
  
  stopClose(event) {
    event.stopPropagation()
  }

  constructor(private store: Store<IState>) {
    this.store.select(store => store.shoppingcart).subscribe(res => this.shoppingcart = res)
  }

  ngOnInit(): void {
  }

}
