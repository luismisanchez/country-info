import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);
  public searchCountry: string;



  constructor() {

    this.searchCountry = 'Start typing a country name';

  }

  ngOnInit(): void {
  }

}
