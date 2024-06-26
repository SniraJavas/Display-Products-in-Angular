import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Input() productData = { id: 0,
    name: '',
    price: 0,
    quantity: 0,
    stock: 0};

  constructor(public rest:ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    
    this.rest.addProduct(this.productData).subscribe((result: { ProductID: number; }) => {
      this.router.navigate(['/product-details/'+result.ProductID]);
    }, (err: any) => {
      console.log(err);
    });
  }

}
