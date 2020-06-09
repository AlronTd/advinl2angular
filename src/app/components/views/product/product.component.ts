import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/i-product';
import * as shoppingcartactions from "../../../store/actions/shoppingcart.actions";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  public product: IProduct
  
  addToCart(){
    this.store.dispatch(new shoppingcartactions.Add(this.product))
  }

  constructor(private route: ActivatedRoute, private productService: ProductService, private store: Store<IState>) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   this.productService.getById(params['id'])
    // })
    this.productService.getById(this.route.snapshot.params.id)
    this.store.select(store => store.product).subscribe(res => this.product = res)
  }

  ngOnDestroy(): void {
    this.productService.clear()
  }
//   constructor() { }

//   ngOnInit(): void {
//     // if (this.products.length == 0) {
//     //   console.log('init');

//     //   await this.initProduct(this.$route.params.id)
//     // } else {
//     //   console.log('get')
//     //   this.getProductById(this.$route.params.id);
//     // }
//     // console.log('product:' + this.product);
//   }

}
