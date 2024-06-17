import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/countrys.interface';
@Injectable({
  providedIn: 'root'
})
export class Coutryservice{

private apiUrl:string= 'https://restcountries.com/v3.1'

constructor(private http:HttpClient) { }

searchCountryByAlphaCode(code:string):Observable<Country | null>{
  const url =`${this.apiUrl}/alpha/${code}`;

  return this.http.get<Country[]>(url)

  .pipe(
    map(countries => countries.length > 0 ? countries[0]:null),

    catchError( ()=> of (null) )
  );

}

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
