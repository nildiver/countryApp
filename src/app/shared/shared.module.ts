import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SadeBarComponent } from './components/side-bar/sade-bar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SadeBarComponent,
    ContactPageComponent,
    SearchboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],exports:[
    HomePageComponent,
    AboutPageComponent,
    SadeBarComponent,
    ContactPageComponent,
    SearchboxComponent
  ]
})
export class SharedModule { }
