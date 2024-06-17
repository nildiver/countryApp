import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRigionPageComponent } from './pages/by-rigion-page/by-rigion-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  {
    path:'by-capital',
    component:ByCapitalPageComponent
  },
  {
    path:'by-country',
    component:ByContryPageComponent
  },
  {
    path:'by-region',
    component:ByRigionPageComponent
  },
  {
    path:'by/id',
    component:CountryPageComponent
  },
  {
    path:'**',
    redirectTo: 'by-capital'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContriesRoutingModule { }
