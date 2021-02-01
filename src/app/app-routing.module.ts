import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CountryComponent} from './components/country/country.component';

// TODO : https://www.techiediaries.com/routing-angular-router/ ????????????

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':countrySlug', component: CountryComponent },
  { path: 'home',   redirectTo: '/', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
