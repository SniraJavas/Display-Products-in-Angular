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
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { InvoiceAddComponent } from './components/invoice/invoice-add/invoice-add.component';
import { InvoiceDeleteComponent } from './components/invoice/invoice-delete/invoice-delete.component';
import { InvoiceDetailsComponent } from './components/invoice/invoice-details/invoice-details.component';
import { InvoiceEditComponent } from './components/invoice/invoice-edit/invoice-edit.component';
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import { ShoppingInvoiceComponent } from './components/invoice/shopping-invoice/shopping-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserListComponent,
    InvoiceAddComponent,
    InvoiceEditComponent,
    InvoiceDetailsComponent,
    InvoiceListComponent,
    InvoiceDeleteComponent,
    ShoppingInvoiceComponent,
  ],
  exports: [ShoppingInvoiceComponent],
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
