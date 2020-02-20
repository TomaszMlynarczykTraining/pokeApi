import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, concat, tap } from 'rxjs/operators';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokeData } from '../shared/models/pokdata.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons$: Observable<PokeData>;
  pokemon$: Observable<Pokemon>;
  private _pokemon = new Subject<string>();

  constructor(private httpClient: HttpClient) {
    const ROOT_LINK = 'https://pokeapi.co/api/v2/pokemon/';
    this.pokemons$ = this.httpClient.get<PokeData>(ROOT_LINK);
    this.pokemon$ = this._pokemon.asObservable().pipe(
      switchMap(url => {
        return this.httpClient.get<Pokemon>(url);
      })
    );
  }

  getPokemonDetails(url: string) {
    this._pokemon.next(url);
  }
}