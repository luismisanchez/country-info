import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CountryComponent} from './components/country/country.component';

// TODO : https://www.techiediaries.com/routing-angular-router/ ????????????

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'afghanistan', component: CountryComponent },
  { path: ':countryPermalink', component: CountryComponent },
  { path: 'not-found', component: NotFoundComponent },  // Wildcard route for a 404 page
  { path: '**',   redirectTo: '/not-found' } // redirect to `home`

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
