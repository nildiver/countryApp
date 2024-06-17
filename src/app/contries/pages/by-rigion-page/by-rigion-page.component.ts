import { Component } from '@angular/core';
import { Country } from '../../interfaces/countrys.interface';
import { Coutryservice } from '../../services/coutry.service';

@Component({
  selector: 'app-by-rigion-page',
  templateUrl: './by-rigion-page.component.html',
  styles: [
  ]
})
export class ByRigionPageComponent {
  public countries:Country[]=[]

  constructor(private countryService:Coutryservice){}

  searchByRegion(term:string):void{
   this.countryService.searchregion(term)
   .subscribe(countries =>{
     this.countries= countries
   })

  }
}
