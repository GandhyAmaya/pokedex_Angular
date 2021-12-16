import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ApiService } from 'src/app/servicios/api/api.service';
import { PokemonsI } from 'src/app/modelos/pokemones.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

   public variable:PokemonsI= {pokemon_1:'',sprites:'',sprites2:'',pokemon_2:''};
    pokemonsForm = new FormGroup({
    pokemon_1: new FormControl('',Validators.required),
    pokemon_2: new FormControl('',Validators.required)
  })

  constructor(private api:ApiService) {  }
   ngOnInit(): void {
  };

  onBattle(form:PokemonsI){
    const {pokemon_1,pokemon_2} = form;
    this.api.getPokemon(pokemon_1).subscribe(res=>{
      console.log(res)
      this.variable.pokemon_1 = res.name;
      this.variable.sprites = res.sprites.front_default;
    });
    this.api.getPokemon(pokemon_2).subscribe(res=>{
      console.log(res)
      this.variable.pokemon_2 = res.name;
      this.variable.sprites2 = res.sprites.front_default;
    })
  };

}
