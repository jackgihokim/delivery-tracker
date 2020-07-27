import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackingDeliveryService {
  private readonly baseUrl: string = 'http://127.0.0.1:3000';
  private readonly apiUrl: string = '/api/v1/delivery-tracker';

  constructor(private http: HttpClient) { }
  
  getTrackingInfo(formData: InvoiceInfo): Observable<any> {
    const url = this.baseUrl + this.apiUrl;
    const body = formData;
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    
    return this.http.post<any>(url, body, httpOptions).pipe(
      tap(res => res),
      catchError(this.handleError<any>('[Error in getTrackingInfo()]'))
    );
  }
  
  private handleError<T> (operation, result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      // TODO: better job of transforming error for user consumption
      console.log(`${ operation } : ${ error.message }`);
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
