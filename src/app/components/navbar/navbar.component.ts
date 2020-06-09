import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shoppingCartItemCount: number
  
  constructor(private store: Store<IState>) { 
    store.select((state: IState) => state.shoppingcart.getTotalQuantity()).subscribe(res => this.shoppingCartItemCount = res)
  }

  ngOnInit(): void {
  }

}
