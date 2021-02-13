import { Component, OnInit } from '@angular/core';
import { CountryListApiService } from '../../services/countryListApi/country-list-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {PermalinkPipe} from '../../pipes/permalink.pipe';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  providers: [CountryListApiService,PermalinkPipe]
})
export class CountryListComponent implements OnInit {

  public searchCountry: string;
  public countryList: Array<any>;
  // countries$: Observable<any>;
  public slug: string;
  // heroes = HEROES;

  constructor(
    private countries: CountryListApiService,
    private route: ActivatedRoute,
    private permalink: PermalinkPipe
  ) {

    this.searchCountry = 'Start typing a country name';

  }

  ngOnInit() {

    // this.countries$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.slug = params.get('countrySlug');
    //     console.log(this.countries.getData());
    //     return this.countries.getData();
    //   })
    // );

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

  onLoadCountry(countryName) {
    this.slug = this.permalink.transform(countryName);
    // console.log(this.slug);
  }
}
