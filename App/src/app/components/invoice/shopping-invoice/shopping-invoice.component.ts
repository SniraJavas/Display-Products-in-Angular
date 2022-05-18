import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shopping-invoice',
  templateUrl: './shopping-invoice.component.html',
  styleUrls: ['./shopping-invoice.component.css']
})
export class ShoppingInvoiceComponent{
  @Input()
  products: Product[]=[];
  @Input()
  product!: any[];
  @Input () total = 0;
  index = 0;
  ngOnChanges(changes: SimpleChanges) {
    let selectedProduct = changes["Product"];
    
      if(!selectedProduct.firstChange){
        this.products.push(selectedProduct.currentValue);
        this.index++;
      }
    }
  @Output() productRemoved = new EventEmitter();

  removeProduct(product: any) {
    this.productRemoved.emit(product)
  }
}
