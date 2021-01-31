import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

// Set the http options
const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CountryListApiService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code';
  }


  /**
   * Function to GET list of countries
   */
  public getData(): Observable<any> {

    // Call the http GET
    return this.http.get(this.url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }

  /**
   * Function to handle error when the server return an error
   *
   * @param error
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

  /**
   * Function to extract the data when the server return some
   *
   * @param res
   */
  private extractData(res: Response) {
    return res || {};
  }

}
