import { Component, OnInit } from '@angular/core';
import { CountryListApiService } from '../../services/countryListApi/country-list-api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  providers: [CountryListApiService]
})
export class CountryListComponent implements OnInit {

  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);
  public searchCountry: string;
  public countryList: Array<any>;

  constructor(private countries: CountryListApiService) {

    this.searchCountry = 'Start typing a country name';

  }

  ngOnInit(): void {

    // console.log(this.getCountries());
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
