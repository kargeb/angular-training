import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProduct } from './product';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  // products: IProduct[];

  getProducts(): Observable<IProduct[]> {
    // return this.products;
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All:' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // getProduct(id: number): Observable<IProduct | undefined> {
  //   return this.getProducts()
  //     .pipe(
  //       map((products: IProduct[]) => products.find(p => p.productId === id))
  //     );
  // }

  getSingleProduct(id: number): Observable<IProduct | undefined> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      map((products: IProduct[]) =>
        products.find((product) => product.productId === id)
      )
      // map( (data: <IProduct[]>) )
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An errror occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
