import { Injectable, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'https://localhost:7205/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
  })
  
};

export interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number,
    stock: number
}

@Injectable({
  providedIn: 'root',
})


export class ProductsService{
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

  getProducts(): Observable<any> {
    return this.http.get(endpoint + 'products').pipe(map(this.extractData),
      catchError(this.handleError)
    );
  }

  getProduct( Id: number): Observable<any> {
    console.log("getByID Product id ", Id);
    return this.http.get(endpoint + 'products/' + Id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  addProduct (product: { id: number,
    name: string,
    price: number,
    quantity: number,
    stock: number}): Observable<any> {
    console.log("Product to Add", product);
    return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError)
    );
  }

  updateProduct ( Id: number, product: Product): Observable<any> {
    console.log("product to update ID ",Id );
    return this.http.put(endpoint + 'products/' + Id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${Id}`)),
      catchError(this.handleError)
    );
  }

  deleteProduct ( Id: number): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + Id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${Id}`)),
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