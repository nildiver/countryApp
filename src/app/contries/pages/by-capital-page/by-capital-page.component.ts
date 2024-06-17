import { Component} from '@angular/core';
import { Coutryservice } from '../../services/coutry.service';
import { Country } from '../../interfaces/countrys.interface';

@Component({
  selector: 'countri-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent {

public countries:Country[]=[]
  constructor(private countryService:Coutryservice){}

 searchBycapital(term:string):void{
  this.countryService.serchCapital(term)
  .subscribe(countries =>{
    this.countries= countries
  })

 }
}
