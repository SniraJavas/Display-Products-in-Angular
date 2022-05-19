import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice, InvoiceService } from 'src/app/services/Invoice/Invoice.service';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {
  
  constructor(public rest:InvoiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }



  addInvoice(InvoiceData : Invoice) {
    
    this.rest.addInvoice(InvoiceData).subscribe((result: { InvoiceID: number; }) => {
      this.router.navigate(['/Invoice-details/'+result.InvoiceID]);
    }, (err: any) => {
      console.log(err);
    });
  }


}
