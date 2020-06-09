import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { IState } from 'src/app/models/istate.model';
import { Add, Remove } from "../../../store/actions/shoppingcart.actions";
import { CartProduct } from 'src/app/models/cart-product';


@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.css']
})
export class ShoppingCartProductComponent implements OnInit {

 @Input()  item: CartProduct

  increment(event) {
    event.stopPropagation()
    this.store.dispatch(new Add(this.item))
  }

  decrement(event) {
    event.stopPropagation()
    this.store.dispatch(new Remove(this.item._id))
  }

  stopClose(event) {
    event.stopPropagation()
  }

  constructor(private store: Store<IState>) {

  }

  ngOnInit(): void {
  }

}
