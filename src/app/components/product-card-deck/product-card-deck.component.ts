import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/i-product';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-card-deck',
  templateUrl: './product-card-deck.component.html',
  styleUrls: ['./product-card-deck.component.css']
})
export class ProductCardDeckComponent implements OnInit {

  @Input('products') public productcatalog: Array<IProduct>

  constructor(private store: Store<IState>, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    
  }

  addToCart(product) {
    this.shoppingCartService.add(product)
  }

  removeFromCart(id) {
    this.shoppingCartService.remove(id)
  }

}
