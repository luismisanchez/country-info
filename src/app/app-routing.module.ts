import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'photo', component: PhotoComponent },
  { path: 'home',   redirectTo: '/', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
