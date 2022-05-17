import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Invoice, InvoiceService } from 'src/app/services/Invoice/Invoice.service';
import { UserAddComponent } from '../../user/user-add/user-add.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  Invoices: Invoice[] = [];
  selectedInvoice!: Invoice;
  closeResult = '';
  isEditable = false;
 
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    public rest: InvoiceService,
    private router: Router) { }

    @Input() InvoiceData: Invoice =  {
      id: 0,
      user: {
        id: 0,
        name: '',
        surname: '',
        email: '',
        role: 0

      },
      products: []= [],
      created: Date.now.toString(),
      total: 0
  }
  ;
    
      @Input() modalTittle: string = '';
  ngOnInit(): void {
    console.log("inside ngOnInit");
    this.getInvoices();
  }

  getInvoices(): void {
    this.rest.getInvoices().subscribe((resp: any) => {
      this.Invoices = resp;
    });
  }

  add(): void {
    this.router.navigate(['/Invoice-add']);
  }

  openEdit(content: any, Invoice : Invoice) {
    console.log("Invoice Edit : ", Invoice);
    this.InvoiceData = Invoice;
    this.modalTittle = 'Edit Invoice';
    this.isEditable = true;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
      this.updateInvoice();

    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openView(content: any, Invoice : Invoice) {
    console.log("content ",content);
    console.log("Invoice ",Invoice);
    this.InvoiceData = Invoice;
    this.modalTittle = 'Invoice Details'
    this.isEditable = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
    
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  openDelete(content: any, Invoice : Invoice) {
    this.InvoiceData = Invoice;
    this.modalTittle = 'Press continue to DELETE this Invoice';
    this.isEditable = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
    console.log("del ",result);
    if(result == 'Continue click'){
      this.delete(this.InvoiceData.id);
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
    this.rest.deleteInvoice(id)
      .subscribe(() => {
          this.getInvoices();
        }, (err: any) => {
          console.log(err);
        }
      );
  }

  updateInvoice() {
    this.rest.updateInvoice(this.InvoiceData.id, this.InvoiceData).subscribe((result) => {
      this.router.navigate(['/Invoice-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
