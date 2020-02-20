import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { PokeData } from '../shared/models/pokdata.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons$: Observable<PokeData>;

  constructor(private pokemonService: PokemonService) {
    this.pokemons$ = this.pokemonService.pokemons$;
  }

  getPokemon(url: string) {
    this.pokemonService.getPokemonDetails(url);
  }
}