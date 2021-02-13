import {Component, OnDestroy, OnInit} from '@angular/core';
import {latLng, tileLayer} from 'leaflet';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {CountryListApiService} from '../../services/countryListApi/country-list-api.service';

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
export class CountryComponent implements OnInit, OnDestroy {

  public slug: string;
  public country: any;
  public mapOptions = {
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

  public displayedColumns: string[] = ['name', 'code', 'symbol'];
  public dataSource = ELEMENT_DATA;

  private paramsSubscription: Subscription;
  private countrySubscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private countries: CountryListApiService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.slug = this.route.snapshot.params.countryPermalink;

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.slug = params.countryPermalink;

          this.countrySubscription = this.countries.getData()
            .subscribe(
              (data: Observable<any>) => {
                Object.entries(data).forEach(([key, value]) => {
                  if (value.slug === this.slug) {
                    this.country = value;
                  }
                });

                if (!this.country && this.slug !== 'not-found') {
                  this.router.navigate(['/', 'not-found'], { replaceUrl: true }).then(r => {
                    console.log(r);
                  });
                }

              },
              error => {
                console.log(error);
              }
            );

        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.countrySubscription.unsubscribe();
  }

}
