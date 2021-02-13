import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PermalinkPipe} from '../../pipes/permalink.pipe';

// Set the http options
const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

export interface Country {
  name: string;
  slug: string;
}


@Injectable({
  providedIn: 'root'
})

export class CountryListApiService {

  public response: any;
  private url: string;
  private countryList: Observable<{}>;

  constructor(
    private http: HttpClient,
    private countrySlug: PermalinkPipe
  ) {
    this.url = 'https://restcountries.eu/rest/v2/all?fields=name';
    this.countrySlug = countrySlug;
  }


  /**
   * Function to GET list of countries
   */
  public getData(): Observable<any> {

    // Call the http GET
    return this.http.get<Country>(this.url)
      .pipe(
        map(response =>   // NOTE: response is of type Country
          // return the modified data:
           this.extractData(response) // kind of useless
        ),
        catchError(this.handleError)
      );

  }

  /**
   * Function to GET one country by slug
   */
  public getOneCountry(slug: string): Observable<any> {

    // console.log(slug);

    // Call the http GET
    return this.http.get<Country>(this.url)
      .pipe(
        map(response =>   // NOTE: response is of type Country
          // return the modified data:
           this.extractOne(response,slug) // kind of useless
        ),
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
  private extractData(res: Country) {
    Object.entries(res).forEach(([key, value]) => {
      value.slug = this.countrySlug.transform(value.name);
    });
    return res || {};
  }

  private extractOne(res: Country, slug: string) {
    // console.log(slug);
    Object.entries(res).forEach(([key, value]) => {

      // console.log(this.countrySlug.transform(value.name));

      if (this.countrySlug.transform(value.name) === slug) {
        value.slug = this.countrySlug.transform(value.name);
        // console.log(value);

        return value || {};
      }
    });
  }
}
