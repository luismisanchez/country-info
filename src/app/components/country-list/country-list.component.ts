import { Component, OnInit } from '@angular/core';
import { CountryListApiService } from '../../services/countryListApi/country-list-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  providers: [CountryListApiService]
})
export class CountryListComponent implements OnInit {

  public searchCountry: string;
  public countryList: Array<any>;
  countries$: Observable<any>;
  slug: string;
  // heroes = HEROES;

  constructor(
    private countries: CountryListApiService,
    private route: ActivatedRoute
  ) {

    this.searchCountry = 'Start typing a country name';

  }

  ngOnInit(): void {

    this.countries$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.slug = params.get('countrySlug');
        return this.countries.getData();
      })
    );

    this.getCountries();

  }

  getCountries() {
    this.countries.getData()
      .subscribe(
        data => {
          this.countryList = data;
          // console.log(data);
          // return data;
        },
        error => {
          console.log(error);
        }
      );
  }
}
