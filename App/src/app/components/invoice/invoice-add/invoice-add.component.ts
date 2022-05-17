import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/Invoice/Invoice.service';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {
  @Input() InvoiceData = {
    id: 0,
    user: {
      id: 0,
      name: '',
      surname: '',
      email: '',
      role: 0

    },
    userId : 0,
    products: []=[],
    created: '',
    total: 0
}
;

  constructor(public rest:InvoiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addInvoice() {
    
    this.rest.addInvoice(this.InvoiceData).subscribe((result: { InvoiceID: number; }) => {
      this.router.navigate(['/Invoice-details/'+result.InvoiceID]);
    }, (err: any) => {
      console.log(err);
    });
  }


}
