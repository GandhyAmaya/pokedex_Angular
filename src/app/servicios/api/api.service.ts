import { Injectable } from '@angular/core';
import {PrincipalI} from '../../modelos/principal.interface';
import {ResponseI}from '../../modelos/response.interface'
import { PokemonsI } from 'src/app/modelos/pokemones.interface';
import {HttpClient, HttpClientJsonpModule, HttpHeaderResponse, HttpHeaders} from '@angular/common/http'
import {BehaviorSubject, observable, Observable, Subject} from 'rxjs'
import { Sprites } from 'src/app/modelos/sprites.interface';
import { PokemonsInt } from 'src/app/core/models/poke.interfaces';


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
}
