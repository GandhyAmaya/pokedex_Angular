import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { PokemonsI } from 'src/app/modelos/pokemones.interface';
import { Router } from '@angular/router';
import { PokemonsTypes2 } from 'src/app/modelos/pokemonsTypes2.interface';
import { PokemonsTypes1 } from 'src/app/modelos/pokemonsTypes1.interface';
import { Puntajes } from 'src/app/modelos/puntaje.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  public variable: PokemonsI = {
    pokemon_1: '',
    sprites: '',
    sprites2: '',
    pokemon_2: '',
  };
  public type_pokemons1: PokemonsTypes1 = { type1_poke1: '', type2_poke1: '' };
  public type_pokemons2: PokemonsTypes2 = { type1_poke2: '', type2_poke2: '' };
  public puntaje: Puntajes = { puntaje1: 0, puntaje2: 0 };
  pokemonsForm = new FormGroup({
    pokemon_1: new FormControl('', Validators.required),
    pokemon_2: new FormControl('', Validators.required),
  });

  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {}

  onBattle(form: PokemonsI) {
    let puntaje_pokemon1 = 0;
    let puntaje_pokemon2 = 0;
    let pokemon1_type: any = [];
    let types_Pokemos: any = [];
    let url: any = [];
    const { pokemon_1, pokemon_2 } = form;
    this.api.getPokemon(pokemon_1).subscribe((res) => {
      types_Pokemos = [''];
      this.variable.pokemon_1 = res.name;
      this.variable.sprites = res.sprites.front_default;
      this.type_pokemons1 = types_Pokemos;
      pokemon1_type = types_Pokemos;
      let types_ = res.types;
      types_.forEach((element) => {
        types_Pokemos.push(element.type.name);
        // url.push(element.type.url);
      });
      /*  url.forEach((element:string) => {
          this.api.getDamagePokemon(element).subscribe(res=>{
          console.log('respuesta1');
        });
      }); */
    });

    this.api.getPokemon(pokemon_2).subscribe((res) => {
      types_Pokemos = [''];
      this.variable.pokemon_2 = res.name;
      this.variable.sprites2 = res.sprites.front_default;
      this.type_pokemons2 = types_Pokemos;
      let types_ = res.types;
      types_.forEach((element) => {
        types_Pokemos.push(element.type.name);
        url.push(element.type.url);
      });
      url.forEach((element: string) => {
        this.api.getDamagePokemon(element).subscribe((res) => {
          //double_damage_from
          pokemon1_type.forEach((element: any) => {
            res.damage_relations.double_damage_from.forEach((element2: any) => {
              console.log('pok2', element2.name);
              console.log('pok1', element);
              if (element === element2.name) {
                puntaje_pokemon1 = puntaje_pokemon1 + 70;
                puntaje_pokemon2 = puntaje_pokemon2 - 70;
                this.puntaje.puntaje1 = puntaje_pokemon1;
                this.puntaje.puntaje2 = puntaje_pokemon2;
                console.log(
                  'puntaje1',
                  puntaje_pokemon1,
                  'puntaje 2',
                  puntaje_pokemon2
                );
              }
            });
          });
          //double_damage_to
          pokemon1_type.forEach((element: any) => {
            res.damage_relations.double_damage_to.forEach((element2: any) => {
              console.log('pok2', element2.name);
              console.log('pok1', element);
              if (element === element2.name) {
                puntaje_pokemon1 = puntaje_pokemon1 - 70;
                puntaje_pokemon2 = puntaje_pokemon2 + 70;
                console.log(
                  'puntaje1',
                  puntaje_pokemon1,
                  'puntaje 2',
                  puntaje_pokemon2
                );
              }
            });
          });
          //half_damage_from
          pokemon1_type.forEach((element: any) => {
            res.damage_relations.half_damage_from.forEach((element2: any) => {
              console.log('pok2', element2.name);
              console.log('pok1', element);
              if (element === element2.name) {
                puntaje_pokemon1 = puntaje_pokemon1 + 30;
                puntaje_pokemon2 = puntaje_pokemon2 - 30;
                console.log(
                  'puntaje1',
                  puntaje_pokemon1,
                  'puntaje 2',
                  puntaje_pokemon2
                );
              }
            });
          });
          //half_damage_to
          pokemon1_type.forEach((element: any) => {
            res.damage_relations.half_damage_to.forEach((element2: any) => {
              console.log('pok2', element2.name);
              console.log('pok1', element);
              if (element === element2.name) {
                puntaje_pokemon1 = puntaje_pokemon1 - 30;
                puntaje_pokemon2 = puntaje_pokemon2 + 30;
                console.log(
                  'puntaje1',
                  puntaje_pokemon1,
                  'puntaje 2',
                  puntaje_pokemon2
                );
              }
            });
          });
          //no_damage_from
          pokemon1_type.forEach((element: any) => {
            res.damage_relations.no_damage_from.forEach((element2: any) => {
              console.log('pok2', element2.name);
              console.log('pok1', element);
              if (element === element2.name) {
                puntaje_pokemon1 = 0;
                puntaje_pokemon2 = 0;
                console.log(
                  'puntaje1',
                  puntaje_pokemon1,
                  'puntaje 2',
                  puntaje_pokemon2
                );
              }
            });
          });
          //no_damage_to
          pokemon1_type.forEach((element: any) => {
            res.damage_relations.no_damage_to.forEach((element2: any) => {
              console.log('pok2', element2.name);
              console.log('pok1', element);
              if (element === element2.name) {
                puntaje_pokemon1 = 0;
                puntaje_pokemon2 = 0;
                console.log(
                  'puntaje1',
                  puntaje_pokemon1,
                  'puntaje 2',
                  puntaje_pokemon2
                );
              }
            });
          });
          this.puntaje.puntaje1 = puntaje_pokemon1;
          this.puntaje.puntaje2 = puntaje_pokemon2;
        });
      });
    });
  }
}
