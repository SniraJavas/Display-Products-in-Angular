import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
const routes: Routes = [{ path: 'products-list', component: ProductListComponent},
                        { path: 'product-add', component: ProductAddComponent},
                        {path: 'product-detail', component: ProductDetailsComponent},
                        {path: 'product-edit' , component: ProductEditComponent},
                        { path: 'users-list', component: UserListComponent},
                        { path: 'user-add', component: UserAddComponent},
                        {path: 'user-detail', component: UserDetailsComponent},
                        {path: 'user-edit' , component: UserEditComponent},
                        {path: '**', component: AppComponent }]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
