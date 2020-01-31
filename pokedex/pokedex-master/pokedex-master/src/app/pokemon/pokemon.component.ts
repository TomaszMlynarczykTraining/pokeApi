import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()
  pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }


  getColorByType(type: string): string {
    switch (type) {
      case 'fire':
        return 'badge-danger';
      case 'ice':
        return 'badge-info';
      case "bug":
        return 'badge-danger';
      case "poison":
        return 'badge-warning';
      case "flying":
        return 'badge-primary';
      default:
return 'badge-success';    }
  }


}
