import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/i-product';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  catalog: Array<IProduct>
  
  constructor(private store: Store<IState>, private productCatalogService: ProductCatalogService) {
    this.store.select(store => store.productcatalog).subscribe(res => this.catalog = res)
  }

  ngOnInit(): void {
    this.productCatalogService.get()
  }

}
