import { Component, OnInit, Input, Inject } from '@angular/core';
import { IProduct } from 'src/app/models/i-product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProduct
  
  constructor(/*@Inject(IProduct) product: IProduct*/) { 
    // this.product = product
  }

  ngOnInit(): void {
  }

}
