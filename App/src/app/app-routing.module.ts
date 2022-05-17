import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
const routes: Routes = [{ path: 'products-list', component: ProductListComponent},
                        { path: 'product-add', component: ProductAddComponent},
                        {path: 'product-detail', component: ProductDetailsComponent},
                        {path: 'product-edit' , component: ProductEditComponent},
                        { path: 'users-list', component: ProductListComponent},
                        { path: 'user-add', component: ProductAddComponent},
                        {path: 'user-detail', component: ProductDetailsComponent},
                        {path: 'user-edit' , component: ProductEditComponent},
                        {path: '**', component: AppComponent }]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
