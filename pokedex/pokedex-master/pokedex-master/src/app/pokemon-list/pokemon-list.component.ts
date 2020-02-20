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
  nextPokemonsUrl: string;
  previousPokemonUrl: string;

  constructor(private pokemonService: PokemonService) {
    this.pokemons$ = this.pokemonService.pokemons$;
  }

  getPokemon(url: string) {
    this.pokemonService.getPokemonDetails(url);
  }

  loadNextPokemons() {
    this.pokemons$.subscribe(data => {
      this.nextPokemonsUrl = data.next;
    });

    if (this.nextPokemonsUrl) {
      this.pokemonService.loadNextPokemons(this.nextPokemonsUrl);
    }else{
      const ROOT_LINK = 'https://pokeapi.co/api/v2/pokemon/';
      this.pokemonService.loadNextPokemons(ROOT_LINK);

    }
  }

  backToPreviousPokemons(){
    this.pokemons$.subscribe(data => {
      this.previousPokemonUrl = data.previous;
    });

    if (this.previousPokemonUrl) {
      this.pokemonService.loadNextPokemons(this.previousPokemonUrl);
    }
  }
}