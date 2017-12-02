import { Component, OnInit } from '@angular/core';
import { Character } from '../_models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public showList = true;
  private model: Character;

  constructor() { }

  ngOnInit() {
  }

  onShowForm(character: Character) {
    if (character) {
      this.model = character;
    } else {
      this.model = null;
    }
    this.showList = !this.showList;
  }

}
