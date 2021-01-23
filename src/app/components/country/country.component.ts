import { Component, OnInit } from '@angular/core';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {latLng, tileLayer} from 'leaflet';


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

  mapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: 'Map data &copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
        })
    ],
    zoom: 5,
    center: latLng(40, -4)
  };

  displayedColumns: string[] = ['name', 'code', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {

  }

}
