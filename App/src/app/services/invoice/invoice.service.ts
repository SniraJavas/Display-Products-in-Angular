import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, tap, throwError } from 'rxjs';
import { Product } from '../product/product.service';
import { User } from '../user/user.service';
const endpoint = 'https://localhost:7205/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
  })
  
};

export interface Invoice {
    id: number,
    name: User,
    products: Product[],
    created: Date,
    total: number
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http: HttpClient) {
    http.options("*",)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private extractData(res: any): any {
    const body = res;
    return body || { };
  }

  getInvoices(): Observable<any> {
    return this.http.get(endpoint + 'Invoices').pipe(map(this.extractData),
      catchError(this.handleError)
    );
  }

  getInvoice( Id: number): Observable<any> {
    console.log("getByID Invoice id ", Id);
    return this.http.get(endpoint + 'Invoices/' + Id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  addInvoice (Invoice: {
    id: number,
    name: string,
    surname: string,
    email: string,
    role: number
}): Observable<any> {
    console.log("Invoice to Add", Invoice);
    return this.http.post<any>(endpoint + 'Invoices', JSON.stringify(Invoice), httpOptions).pipe(
      tap((Invoice) => console.log(`added Invoice w/ id=${Invoice.id}`)),
      catchError(this.handleError)
    );
  }

  updateInvoice ( Id: number, Invoice: Invoice): Observable<any> {
    console.log("Invoice to update ID ",Id );
    return this.http.put(endpoint + 'Invoices/' + Id, JSON.stringify(Invoice), httpOptions).pipe(
      tap(_ => console.log(`updated Invoice id=${Id}`)),
      catchError(this.handleError)
    );
  }

  deleteInvoice ( Id: number): Observable<any> {
    return this.http.delete<any>(endpoint + 'Invoices/' + Id, httpOptions).pipe(
      tap(_ => console.log(`deleted Invoice id=${Id}`)),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
