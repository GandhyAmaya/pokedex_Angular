import { Host, Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule, HttpHeaderResponse, HttpHeaders} from '@angular/common/http'
import { PokemonsInt } from 'src/app/core/models/poke.interfaces';
import {DamageI} from '../../core/models/damage.interfaces'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient ){

   }
  getPokemon (pokemon:any){
   return  this.http.get<PokemonsInt>(this.url+ `${pokemon}`);
  }
  getDamagePokemon(host:any){
      return this.http.get<DamageI>(host);
  }
}
