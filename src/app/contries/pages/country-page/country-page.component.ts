import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coutryservice } from '../../services/coutry.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute:ActivatedRoute,
    private coutryesService:Coutryservice
  ){}

  ngOnInit():void {
    this.activatedRoute.params
    .subscribe(({id}) =>{
      this.coutryesService.searchCountryByAlphaCode(id)
      .subscribe(country=>{
        console.log({country})
      });
    });

  }

}
