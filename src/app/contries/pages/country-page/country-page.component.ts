import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coutryservice } from '../../services/coutry.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countrys.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private coutryesService:Coutryservice
  ){}

  ngOnInit():void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.coutryesService.searchCountryByAlphaCode(id))
    )
    .subscribe(country =>{
    if(!country){
      return this.router.navigateByUrl('');
    }


   return this.country=country;
 // return
    });
   }



}
