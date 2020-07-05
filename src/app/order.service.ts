import { Injectable } from '@angular/core';
import { Order } from './orders';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl = 'api/orders';  // URL to web api

  /** GET heroes from the server */
  getOrders(): Observable<Order[]> {
    console.log('url ', this.ordersUrl)
    return this.http.get<Order[]>(this.ordersUrl)
    .pipe(
      catchError(this.handleError<Order[]>('getOrder', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getOrder(id: number): Observable<Order> {
    const url = `${this.ordersUrl}/${id}`;
    console.log('url ', url)
    return this.http.get<Order>(url)
    .pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError<Order>(`getOrder id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(

    private http: HttpClient,
    ) { }
}
