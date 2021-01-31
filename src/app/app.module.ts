import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MAT_RIPPLE_GLOBAL_OPTIONS, MatRippleModule, RippleGlobalOptions} from '@angular/material/core';
import { CountryComponent } from './components/country/country.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { CountryListComponent } from './components/country-list/country-list.component';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  animation: {
    enterDuration: 300,
    exitDuration: 0
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CountryComponent,
    HomeComponent,
    FooterComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    LeafletModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
