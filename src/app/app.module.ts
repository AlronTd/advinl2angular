import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartProductComponent } from './components/shopping-cart/shopping-cart-product/shopping-cart-product.component';
import { ProductCardDeckComponent } from './components/product-card-deck/product-card-deck.component';
import { ProductCardComponent } from './components/product-card-deck/product-card/product-card.component';
import { ProductComponent } from './components/views/product/product.component';
import { ProductCatalogComponent } from './components/views/product-catalog/product-catalog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCatalogReducer } from './store/reducers/product-catalog.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingCartReducer } from './store/reducers/shoppingcart.reducer';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartProductComponent,
    ProductCardDeckComponent,
    ProductCardComponent,
    ProductComponent,
    ProductCatalogComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogReducer,
      product: ProductReducer,
      shoppingcart: ShoppingCartReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
