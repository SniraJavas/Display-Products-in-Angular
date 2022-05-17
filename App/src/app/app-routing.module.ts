import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AppComponent } from './app.component';
const routes: Routes = [{ path: 'products-list', component: ProductListComponent},
                        {path: '**', component: AppComponent }]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
