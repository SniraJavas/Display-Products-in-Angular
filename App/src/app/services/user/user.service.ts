import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, tap, throwError } from 'rxjs';


const endpoint = 'https://localhost:7205/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
  })
  
};

export interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    role: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  getUsers(): Observable<any> {
    return this.http.get(endpoint + 'Users').pipe(map(this.extractData),
      catchError(this.handleError)
    );
  }

  getUser( Id: number): Observable<any> {
    console.log("getByID User id ", Id);
    return this.http.get(endpoint + 'Users/' + Id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  addUser (User: {
    id: number,
    name: string,
    surname: string,
    email: string,
    role: number
}): Observable<any> {
    console.log("User to Add", User);
    return this.http.post<any>(endpoint + 'Users', JSON.stringify(User), httpOptions).pipe(
      tap((User) => console.log(`added User w/ id=${User.id}`)),
      catchError(this.handleError)
    );
  }

  updateUser ( Id: number, User: User): Observable<any> {
    console.log("User to update ID ",Id );
    return this.http.put(endpoint + 'Users/' + Id, JSON.stringify(User), httpOptions).pipe(
      tap(_ => console.log(`updated User id=${Id}`)),
      catchError(this.handleError)
    );
  }

  deleteUser ( Id: number): Observable<any> {
    return this.http.delete<any>(endpoint + 'Users/' + Id, httpOptions).pipe(
      tap(_ => console.log(`deleted User id=${Id}`)),
      catchError(this.handleError)
    );
  }

  getUserById(Id : number): Observable<any>{
    return this.http.get<any>(endpoint + 'Users/' + Id, httpOptions).pipe(
      tap(_ => console.log(`get User id=${Id}`)),
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
