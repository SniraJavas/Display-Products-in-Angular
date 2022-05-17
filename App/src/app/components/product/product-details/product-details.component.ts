import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  constructor(public rest:ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['Id']).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
    });
  }

}
