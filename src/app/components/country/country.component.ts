import { Component, OnInit } from '@angular/core';
import {latLng, tileLayer} from 'leaflet';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


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

  public slug: string;


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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

   // this.slug = this.activatedRoute.snapshot.paramMap.get('id');
   // console.log(this.slug);

    //this.route.queryParams.subscribe(params => {
    //  this.slug = params['countrySlug'];
    //});

    this.slug = this.route.snapshot.paramMap.get('countrySlug');
    // this.hero$ = this.service.getHero(slug);




  }

}
