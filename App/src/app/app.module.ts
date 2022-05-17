import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent],
})

export class AppModule { }
