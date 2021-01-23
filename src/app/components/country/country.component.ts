import { Component, OnInit } from '@angular/core';

export interface Currencies {
  name: string;
  code: string;
  symbol: string;
}

const ELEMENT_DATA: Currencies[] = [
  {name: 'Hydrogen', code: 'kjhjhj', symbol: 'H'},
  {name: 'Helium', code: 'kjkjh', symbol: 'He'}
];

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'code', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
