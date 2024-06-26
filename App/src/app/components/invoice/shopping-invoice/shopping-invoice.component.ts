import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Invoice, InvoiceService } from 'src/app/services/Invoice/Invoice.service';
import { Product } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shopping-invoice',
  templateUrl: './shopping-invoice.component.html',
  styleUrls: ['./shopping-invoice.component.css']
})
export class ShoppingInvoiceComponent{
  constructor(public restInvoice:InvoiceService){}
  @Input()
  products: Product[]=[];
  @Input()
  product!: any[];
  @Input() total = 0;
  index = 0;
  @Output() productRemoved = new EventEmitter();
  @Output() newInvoice = new EventEmitter();
  ngOnChanges(changes: SimpleChanges) {
    let selectedProduct = changes["Product"];
    
      if(selectedProduct != null){
        this.products.push(selectedProduct.currentValue);
        this.index++;
      }
    }


  removeProduct(product: Product) {
    this.productRemoved.emit(product)
    this.total -= product.price;
  }
  addInvoice(){
    //User is mocked and will be placed after login
    console.log("adding ...")
    let invoice = {
      id: 0,
      user: {
        id: 4,
        name: "Sizwe",
        surname: "Jumba",
        email: "snirajumba@gail.com",
        role: "1"
      },
      products: this.products,
      userId: 4,
      created: "2022-05-17T19:05:13.765Z",
      total: this.total,
    }
  this.restInvoice.addInvoice(invoice).subscribe((resp: any) => {
    console.log(resp);
    this.products = resp;
  });;
    // this.newInvoice.emit(invoice);
  }
}
