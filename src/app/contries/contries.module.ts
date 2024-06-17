import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContriesRoutingModule } from './contries-routing.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRigionPageComponent } from './pages/by-rigion-page/by-rigion-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { SharedModule } from '../shared/shared.module';
import { CountrystableComponent } from './components/countrystable/countrystable.component';


@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByContryPageComponent,
    ByRigionPageComponent,
    CountryPageComponent,
    CountrystableComponent
  ],
  imports: [
    CommonModule,
    ContriesRoutingModule,
    SharedModule
  ]
})
export class ContriesModule { }
