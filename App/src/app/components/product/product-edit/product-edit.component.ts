import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() productData:any = { prod_name: '', prod_price:0 };

  constructor(public rest:ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['Id']).subscribe((data: {}) => {
      console.log("Data to modify : ",data);
      this.productData = data;
    });
  }

  updateProduct() {
    this.rest.updateProduct(this.route.snapshot.params['Id'], this.productData).subscribe((result) => {
      this.router.navigate(['/product-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
