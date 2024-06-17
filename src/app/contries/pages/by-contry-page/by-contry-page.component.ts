import { Component } from '@angular/core';
import { Country } from '../../interfaces/countrys.interface';
import { Coutryservice } from '../../services/coutry.service';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: [
  ]
})
export class ByContryPageComponent {
  public countries:Country[]=[]

  constructor(private countryService:Coutryservice){}

  searchByCountry(term:string):void{
   this.countryService.searchCountry(term)
   .subscribe(countries =>{
     this.countries= countries
   })

  }
}
