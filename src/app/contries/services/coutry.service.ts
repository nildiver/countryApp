import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, map, tap } from 'rxjs';
import { Country } from '../interfaces/countrys.interface';
@Injectable({
  providedIn: 'root'
})
export class Coutryservice{

private apiUrl:string= 'https://restcountries.com/v3.1'

constructor(private http:HttpClient) { }
serchCapital(term:string):Observable<Country[]>{
  const url =`${this.apiUrl}/capital/${term}`;
  return this.http.get<Country[]>(url);
}

searchCountry(term:string): Observable<Country[]>{
  const url =`${this.apiUrl}/name/${term}`;
  return this.http.get<Country[]>(url);
}

searchregion(region:string): Observable<Country[]>{
  const url =`${this.apiUrl}/region/${region}`;
  return this.http.get<Country[]>(url);
}

}
