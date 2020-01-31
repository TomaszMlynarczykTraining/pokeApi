import { Component } from '@angular/core';
import { POKEMONS } from './db/pokemons';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { element } from '@angular/core/src/render3';
import { Pokemon } from './shared/models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // pokemons = POKEMONS.map(
  //   (pokemon: any) => {
  //     pokemon.birthDate = new Date();
  //     return pokemon;
    //}
  //);

  pokemons;
  pokemons$: Observable<any>;
  pikachu$:Observable<Pokemon>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.pokemons$= this.httpClient.get(environment.API_LINK + 'type/3/');

   this.pokemons$.subscribe(data=>{
        this.pokemons=data.pokemon.map(element=>element.pokemon);
   });

   this.pikachu$=this.httpClient.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/pikachu");
   //this.pokemons$.subscribe(console.log);

  }
}
