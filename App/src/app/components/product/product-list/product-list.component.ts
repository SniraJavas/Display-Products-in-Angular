import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product, ProductsService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  cartProductList :Product[] = [];
  total = 0;
  products: Product[] = [];
  selectedProduct!: Product;
  closeResult = '';
  isEditable = false;
  @Output() productAdded = new EventEmitter();
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    public rest: ProductsService,
    private router: Router) { }

    @Input() productData: Product = { id: 0,
      name: '',
      price: 0,
      quantity: 0,
      stock: 0};
    
      @Input() modalTittle: string = '';
  ngOnInit(): void {

    this.getProducts();
  }

  getProducts(): void {
    this.rest.getProducts().subscribe((resp: any) => {
      this.products = resp;
    });
  }

  add(): void {
    this.router.navigate(['/product-add']);
  }

  openEdit(content: any, Product : Product) {
  
    this.productData = Product;
    this.modalTittle = 'Edit Product';
    this.isEditable = true;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
      this.updateProduct();

    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openView(content: any, product : Product) {

    this.productData = product;
    this.modalTittle = 'Product Details'
    this.isEditable = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
    
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openDelete(content: any, Product : Product) {
    this.productData = Product;
    this.modalTittle = 'Press continue to DELETE this product';
    this.isEditable = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
    console.log("del ",result);
    if(result == 'Continue click'){
      this.delete(this.productData.id);
    }
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  delete(id: number): void {
    console.log("id ", id);
    this.rest.deleteProduct(id)
      .subscribe(() => {
          this.getProducts();
        }, (err: any) => {
          console.log(err);
        }
      );
  }

  updateProduct() {
    this.rest.updateProduct(this.productData.id, this.productData).subscribe((result) => {
      this.router.navigate(['/product-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

  addProductToInvoice(content: any,product : Product) {
  
    const productExistInInvoice = this.cartProductList.find(({id}) => id === product.id); // find product by name
    if (!productExistInInvoice) {
      this.cartProductList.push(product); // enhance "porduct" opject with "num" property
      return;
    }else{
      let index = this.cartProductList.indexOf(productExistInInvoice);
      this.cartProductList[index].quantity++;
    }
  }

  removeProduct(product: { name: any; }) {
    this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
   }
}
