import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogComponent } from './components/views/product-catalog/product-catalog.component';
import { ProductComponent } from './components/views/product/product.component';
import { NotFoundComponent } from './components/views/not-found/not-found.component';


const routes: Routes = [
  { path: "", component: ProductCatalogComponent },
  { path: "products/:id", component: ProductComponent },
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
