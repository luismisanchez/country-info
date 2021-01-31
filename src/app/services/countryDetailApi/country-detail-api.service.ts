import { Injectable } from '@angular/core';
import { Country, CountryAdapter } from '../../components/country/models/country.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailApiService {

  private baseUrl = 'https://restcountries.eu/rest/v2/alpha/es';

  constructor(
    private http: HttpClient,
    private adapter: CountryAdapter
  ) {}

  list(): Observable<Country[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }

}
